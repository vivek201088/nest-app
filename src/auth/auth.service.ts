import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/user/dto/login.dto';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private userRepo:Repository<User>,
                 private jwtService: JwtService){}

    async signUp(createduserdto:CreateUserDto){
        const {uname,password}=createduserdto ;

        const hash = await bcrypt.hash(password, 10);
        createduserdto.password=hash
        const user=await this.userRepo.save(createduserdto)
         const token= this.jwtService.sign({id:user.id})
         return {token}
        
    }
    async login(loginDto: LoginDto): Promise<{ token: string }> {
        const {password } = loginDto;
    
        const user = await this.userRepo.findOne({ where:{password:password} });
    
        if (!user) {
          throw new UnauthorizedException('Invalid email or password');
        }
    
        const isPasswordMatched = await bcrypt.compare(password, user.password);
    
        if (!isPasswordMatched) {
          throw new UnauthorizedException('Invalid password');
        }
    
        const token = this.jwtService.sign({ id: user.id });
    
        return { token };
      }

    async findAll(){
        return await this.userRepo.find();
    }


}