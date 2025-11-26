import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateTipoReclamoDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
