import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @Column()
    createdAt: Date;    
    
    @Column()
    updatedAt: Date;
    
    @ManyToOne(type => Product, 
        product => product.image)
    @JoinColumn()
    product: Product[];
}
