import { IsNotEmpty, IsString, Length, Matches } from "class-validator";
import { MatchPasswords } from "../../utils";


const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export class LoginPayload {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    @Matches(passwordPattern, { message: 'Password must be at least 8 characters long, contain both uppercase and lowercase letters, and include at least one special character.' })
    password: string;
}


export class RegisterPayload {
    @IsNotEmpty()
    @IsString()
    fullName: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    username: string;

    @IsNotEmpty()
    @IsString()
    @Matches(passwordPattern, { message: 'Password must be at least 8 characters long, contain both uppercase and lowercase letters, and include at least one special character.' })
    password: string;

    @IsNotEmpty()
    @IsString()
    @MatchPasswords('password')
    repeatPassword: string;

}
