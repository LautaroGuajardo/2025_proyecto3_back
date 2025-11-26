import { IsNotEmpty, IsString, IsOptional, IsMongoId } from 'class-validator';

export class CreateSubAreaDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsMongoId()
  @IsNotEmpty()
  idArea!: string;
}
