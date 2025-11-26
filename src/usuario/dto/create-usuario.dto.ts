import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEmail,
  IsMongoId,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  apellido!: string;

  @IsEmail()
  @IsNotEmpty()
  correo!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsOptional()
  estaActivo?: boolean;

  @IsOptional()
  fechaRegistro?: string;

  @IsMongoId()
  @IsNotEmpty()
  idSubArea!: string;

  @IsMongoId()
  @IsNotEmpty()
  idRolUsuario!: string;
}
