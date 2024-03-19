import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Coment } from 'src/coments/entities/coment.entity';
import { Detail } from 'src/detail/entities/detail.entity';
import { Discount } from 'src/discount/entities/discount.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Product, Coment, Detail, Discount]) 
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
