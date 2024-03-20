import { Module } from '@nestjs/common';
import { DescriptionService } from './description.service';
import { DescriptionController } from './description.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Description } from './entities/description.entity';
import { Product } from 'src/products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Description, Product])
  ],
  controllers: [DescriptionController],
  providers: [DescriptionService],
})
export class DescriptionModule {}
