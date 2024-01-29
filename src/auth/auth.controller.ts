import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from 'src/user/dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
      return this.authService.signUp(createUserDto);
    }

    @Get()
    @UseGuards(AuthGuard())
    findAll(){
      return this.authService.findAll();
    }

    @Get("signIn")
    signIn(@Body() user:LoginDto){
      return this.authService.login(user);
    }

}
