import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category: string;

    @ManyToOne(type => Product,
        product => product.category)
    @JoinColumn()
    product: Product[];

    @Column()
    createdAt: Date;    
    
    @Column()
    updatedAt: Date;


}
