import { IsNotEmpty, IsString, IsOptional, IsMongoId } from 'class-validator';

export class CreateReclamoDto {
  @IsString()
  @IsNotEmpty()
  codigoReclamo!: string;

  @IsString()
  @IsNotEmpty()
  titulo!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  resolucionFinal?: string;

  @IsMongoId()
  @IsNotEmpty()
  idProyecto!: string;

  @IsMongoId()
  @IsNotEmpty()
  idSubArea!: string;

  @IsMongoId()
  @IsNotEmpty()
  idUsuario!: string;

  @IsMongoId()
  @IsNotEmpty()
  idCriticidad!: string;

  @IsMongoId()
  @IsNotEmpty()
  idPrioridad!: string;

  @IsMongoId()
  @IsNotEmpty()
  idTipoReclamo!: string;

  @IsMongoId()
  @IsNotEmpty()
  idEstadoReclamo!: string;

  @IsOptional()
  @IsMongoId()
  idArchivo?: string;

  @IsOptional()
  fechaRegistro?: string;
}
