import { Module } from '@nestjs/common';
import { ComentsService } from './coments.service';
import { ComentsController } from './coments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coment } from './entities/coment.entity';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coment, Product, User])
  ],
  controllers: [ComentsController],
  providers: [ComentsService],
})
export class ComentsModule {}
