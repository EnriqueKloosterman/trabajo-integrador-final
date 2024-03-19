import { Product } from "src/products/entities/product.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Coment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    coment: string;

    @ManyToOne(type => Product,
        product => product.coment,)
    @JoinColumn()
    product: Product[]
    
    @ManyToOne(type => User,
        user => user.coment)
    @JoinColumn()
    user: User[];
}
