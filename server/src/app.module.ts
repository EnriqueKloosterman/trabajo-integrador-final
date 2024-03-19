import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProductsModule } from './products/products.module';
import { ComentsModule } from './coments/coments.module';
import { DiscountModule } from './discount/discount.module';
import { DetailModule } from './detail/detail.module';
import * as path from 'path';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: null,
    database: 'mercadito',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    }),
    MulterModule.register({
      storage: diskStorage({
        destination: '../public/img/user', // Directorio donde se guardarán los archivos
        filename: (req, file, cb) => {
          const fileName = `${Date.now()}_image${path.extname(file.originalname)}`;
          cb(null, fileName);
        },
      }),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    UserModule,
    ProductsModule,
    ComentsModule,
    DiscountModule,
    DetailModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
