import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Discount {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    discount_on: boolean;

    @Column()
    discount: number;

    @ManyToOne(type => Product,
    product => product.discount)
    @JoinColumn()
    product: Product[];


}
