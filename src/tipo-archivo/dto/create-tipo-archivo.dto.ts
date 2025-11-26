import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTipoArchivoDto {
  @IsString()
  @IsNotEmpty()
  nombreFormato!: string;
}
