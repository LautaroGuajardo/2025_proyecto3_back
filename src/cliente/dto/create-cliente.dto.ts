import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsBoolean,
  MinLength,
} from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsString()
  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  apellido: string;

  @IsEmail({}, { message: 'Correo electrónico inválido' })
  @IsNotEmpty({ message: 'El correo es obligatorio' })
  correo: string;

  @IsString()
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsOptional()
  fechaRegistro?: Date;

  @IsBoolean()
  @IsOptional()
  estaActivo?: boolean;
}
