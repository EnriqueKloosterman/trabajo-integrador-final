import { IsString, IsNotEmpty, IsInt, IsDate, IsOptional } from 'class-validator';

export class CreateComentDto {
  @IsString()
  @IsNotEmpty()
  coment: string;

  @IsInt()
  @IsNotEmpty()
  id_product: number;

  @IsInt()
  @IsNotEmpty()
  id_user: number;

}
