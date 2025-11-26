import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import TipoArchivoService from './tipo-archivo.service';
import TipoArchivoController from './tipo-archivo.controller';
import { TipoArchivoSchema } from './schemas/tipo-archivo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'TipoArchivo', schema: TipoArchivoSchema },
    ]),
  ],
  providers: [TipoArchivoService],
  controllers: [TipoArchivoController],
  exports: [TipoArchivoService],
})
export class TipoArchivoModule {}
