import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm";

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

    @BeforeInsert()
    @BeforeUpdate()
    transformEmail() {
        this.email = this.email.toLocaleLowerCase();
    }

}
