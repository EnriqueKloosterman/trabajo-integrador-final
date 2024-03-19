import { Coment } from "src/coments/entities/coment.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";

enum UserRole{
    ADMIN = 'admin',
    USER = 'user'
}
@Entity()
export class User {
    @PrimaryColumn()
    id: string;

    @Column()
    user_name: string;

    @Column()
    user_lastName: string;

    @Column()
    user_email: string;

    @Column()
    business_name: string;

    @Column()
    user_password: string;

    @Column()
    user_address: string;

    @Column()
    user_phone: number;

    @Column()
    image: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER,
    })
    user_role: UserRole;

    @OneToMany(type => Coment,
        coment => coment.user)
    @JoinColumn()
    coment: Coment[];
}
