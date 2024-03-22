import { IsString, IsNotEmpty, IsInt, IsDate, IsOptional } from 'class-validator';

export class CreateDetailDto {
  @IsString()
  @IsNotEmpty()
  detail: string;

  @IsInt()
  @IsNotEmpty()
  id_product: number;

}
