import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Description {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @ManyToOne(type => Product,
        product => product.description)
    @JoinColumn()
    product: Product[];

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
