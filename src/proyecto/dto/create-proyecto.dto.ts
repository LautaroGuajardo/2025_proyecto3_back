import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsMongoId,
  IsDateString,
} from 'class-validator';

export class CreateProyectoDto {
  @IsMongoId()
  @IsNotEmpty()
  idCliente!: string;

  @IsString()
  @IsNotEmpty()
  titulo!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsDateString()
  fechaRegistro?: string;

  @IsMongoId()
  @IsNotEmpty()
  idTipoProyecto!: string;
}
