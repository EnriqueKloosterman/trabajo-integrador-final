import { IsNotEmpty, IsInt, IsPositive } from 'class-validator';

export class CreateDiscountDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  discount_on: string;

  @IsPositive()
  @IsNotEmpty()
  discount: number;
}
