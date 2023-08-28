import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { User, Rol } from "./";



@Entity({
    name: 'user_rol'
})
export class UserRol {

    @PrimaryColumn('uuid')
    userId: string;

    @PrimaryColumn('uuid')
    rolId: string;

    @ManyToOne(() => User, (user) => user.userRol)
    public user: User;

    @ManyToOne(() => Rol, (rol) => rol.userRol)
    public rol: Rol;
}