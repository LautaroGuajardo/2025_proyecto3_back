import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import ArchivoService from './archivo.service';
import ArchivoController from './archivo.controller';
import { ArchivoSchema } from './schemas/archivo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Archivo', schema: ArchivoSchema }]),
  ],
  providers: [ArchivoService],
  controllers: [ArchivoController],
  exports: [ArchivoService],
})
export class ArchivoModule {}
