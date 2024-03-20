import { Transform } from "class-transformer";
import { IsEmail, IsInt, IsString, MinLength } from "class-validator";

export class CreateUserDto {


    @IsString()
    @MinLength(3)
    user_name: string;

    @IsString()
    @MinLength(3)
    user_lastName: string;

    @IsEmail()
    user_email: string;

    @IsString()
    business_name: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(8)
    user_password: string;

    @IsString()
    @MinLength(3)
    user_address: string;

    @IsInt()
    user_phone: number;
}
