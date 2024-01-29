import { IsNotEmpty, IsString } from "class-validator"

export class LoginDto{
    @IsString() 
    @IsNotEmpty()
    uname:string

    @IsString() 
    @IsNotEmpty()
     password:string
}