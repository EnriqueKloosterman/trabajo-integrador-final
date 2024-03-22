import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateDescriptionDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @IsNotEmpty()
  id_pproduct: number;
}
