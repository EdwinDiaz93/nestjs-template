import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToMany } from "typeorm";
import { UserRol } from "./";

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

    @OneToMany(() => UserRol, userRol => userRol.userId)
    public userRol: UserRol[];

    @BeforeInsert()
    @BeforeUpdate()
    transformEmail() {
        this.email = this.email.toLocaleLowerCase();
    }

}
