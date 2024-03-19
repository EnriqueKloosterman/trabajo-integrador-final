import { Discount } from "src/discount/entities/discount.entity";
import { Coment } from "../../coments/entities/coment.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Detail } from "src/detail/entities/detail.entity";

@Entity()
export class Product {
    @PrimaryColumn()
    id: string;

    @Column()
    product_name: string;

    @Column()
    price: number;

    @Column()
    quantity: number;

    @OneToMany(type => Coment,
        coment => coment.product)
    @JoinColumn()
    coment: Coment[];

    @OneToMany(type => Discount, 
        discount => discount.product)
    @JoinColumn()
    discount: Discount[];

    @OneToMany(type => Detail,
        detail => detail.product)
    @JoinColumn()
    detail: Detail[];

}
