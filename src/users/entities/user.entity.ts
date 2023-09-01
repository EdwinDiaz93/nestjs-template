import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, ManyToMany, JoinTable } from "typeorm";
import { Rol } from '../../roles/entities'
@Entity({
    name: 'users',
})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true,
        nullable: false,
    })
    email: string;

    @Column('text', {
        nullable: false,
    })
    fullName: string;

    @Column('text', {
        nullable: false,
    })
    password: string;

    @ManyToMany(() => Rol, { eager: true })
    @JoinTable({ name: 'user_rol', })
    roles: Rol[];

    @BeforeInsert()
    @BeforeUpdate()
    transformEmail() {
        this.email = this.email.toLocaleLowerCase();
    }



}
