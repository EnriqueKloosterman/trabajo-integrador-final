import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Detail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    detail:  string;

    @Column()
    createdAt: Date;    
    
    @Column()
    updatedAt: Date;

    @ManyToOne(type => Product,
        product => product.detail,)
    @JoinColumn()
    product: Product[];
}
