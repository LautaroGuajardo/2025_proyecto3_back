import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateEstadoReclamoDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
