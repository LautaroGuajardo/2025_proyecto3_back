import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreatePrioridadDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
