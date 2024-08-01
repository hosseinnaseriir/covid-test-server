import {
    Body, Controller, HttpCode, HttpException, HttpStatus, Post, UseGuards
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LoginPayload, RegisterPayload } from '../../models';
import { Public } from '../../decorators';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Public()
    @Post("/register")
    @HttpCode(HttpStatus.CREATED)
    async register(@Body() registerPayload: RegisterPayload) {
        try {
            const user = await this.authService.registerUser(registerPayload);
            return { message: 'Registration Successful', user };
        } catch (ex) {
            throw new HttpException(ex.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Public()
    @Post("/validate")
    @UseGuards(AuthGuard('local'))
    @HttpCode(HttpStatus.OK)
    async validate(@Body() loginPayload: LoginPayload) {
        try {
            const user = await this.authService.validateUser(loginPayload);
            const token = await this.authService.generateJwtToken(user);
            return { message: "Login Seccessfull", user, token }
        } catch (ex) {
            throw new HttpException(ex.message, HttpStatus.UNAUTHORIZED);
        }
    }

}
