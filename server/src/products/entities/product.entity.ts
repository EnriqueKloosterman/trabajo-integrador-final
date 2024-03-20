import { Discount } from "src/discount/entities/discount.entity";
import { Coment } from "../../coments/entities/coment.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { Detail } from "src/detail/entities/detail.entity";
import { Image } from "src/image/entities/image.entity";
import { Description } from "src/description/entities/description.entity";
import { Category } from "src/category/entities/category.entity";

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

    @Column()
    createdAt: Date;    
    
    @Column()
    updatedAt: Date;

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

    @OneToMany(type => Image,
        image => image.product)
    @JoinColumn()
    image: Image[];

    @OneToMany(type => Description,
        description => description.product)
    @JoinColumn()
    description: Description[];

    @OneToMany(type => Category,
        category => category.product)
    @JoinColumn()
    category: Category[];
}
