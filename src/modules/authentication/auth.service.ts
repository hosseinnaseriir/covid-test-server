import { LoginPayload, RegisterPayload, User } from 'src/models';
import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private jwtService: JwtService
    ) { }

    async registerUser(registerPayload: RegisterPayload) {
        const existingUser = await this.usersRepository.findOneBy({ username: registerPayload.username })
        if (existingUser) {
            throw new HttpException('User already exists', HttpStatus.CONFLICT);
        }
        const hashedPassword = bcrypt.hashSync(registerPayload.password, 10);
        const user = this.usersRepository.create({
            username: registerPayload.username,
            fullName: registerPayload.fullName,
            password: hashedPassword,
        })
        await this.usersRepository.save(user);
        return user;
    }


    async validateUser(loginPayload: LoginPayload) {
        const user = await this.usersRepository.findOneBy({ username: loginPayload.username });
        if (!user) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }

        const isMatch: boolean = await bcrypt.compare(loginPayload.password, user.password)
        if (!isMatch) {
            throw new BadRequestException('Password does not match');
        }
        return user;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async generateJwtToken({ password, ...user }: User) {
        return this.jwtService.sign({ ...user });
    }
}
