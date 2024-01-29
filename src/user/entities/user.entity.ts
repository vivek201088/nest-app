import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    uname:string
    @Column()
    password:string


}
