import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  product_name: string;

  @IsNotEmpty()
  price: number;

  @IsInt()
  @IsNotEmpty()
  id_discount: number;

  @IsInt()
  @IsNotEmpty()
  id_stock: number;

  @IsInt()
  @IsNotEmpty()
  id_user: number;
}
