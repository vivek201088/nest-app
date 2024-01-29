import { IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    uname:string
    @IsString()
    @IsNotEmpty()
    password:string
}
