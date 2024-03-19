import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Coment } from 'src/coments/entities/coment.entity';
import { Discount } from 'src/discount/entities/discount.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Coment, Discount])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
