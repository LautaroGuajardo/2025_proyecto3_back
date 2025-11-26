import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateRolUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
