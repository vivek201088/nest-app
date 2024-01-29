import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";

export const typeormcnfig:TypeOrmModuleOptions={
    
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'mydb',
        entities: [join(__dirname,"..","**","*.entity.{.ts,js}")],
        synchronize: true,
      
}