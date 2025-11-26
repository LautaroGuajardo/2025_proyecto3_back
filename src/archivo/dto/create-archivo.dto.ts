import { IsNotEmpty, IsString, IsMongoId, IsOptional } from 'class-validator';

export class CreateArchivoDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsMongoId()
  @IsNotEmpty()
  idTipoArchivo!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
