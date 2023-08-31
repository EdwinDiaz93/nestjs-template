import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities";


@Entity({
    name: 'roles'
})
export class Rol {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        nullable: false,
        default: 'user',
        unique: true,
    })
    name: string;

    @ManyToMany(() => User)
    public users: Promise<User[]>;

} 