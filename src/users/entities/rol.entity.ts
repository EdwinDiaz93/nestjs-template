import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserRol } from "./";


@Entity({
    name: 'roles'
})
export class Rol {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        nullable: false,
        default: 'user',
    })
    name: string;

    @OneToMany(() => UserRol, userRol => userRol.rolId)
    public userRol: UserRol[];

} 