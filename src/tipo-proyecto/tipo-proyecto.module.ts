import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import TipoProyectoService from './tipo-proyecto.service';
import TipoProyectoController from './tipo-proyecto.controller';
import { TipoProyectoSchema } from './schemas/tipo-proyecto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'TipoProyecto', schema: TipoProyectoSchema },
    ]),
  ],
  providers: [TipoProyectoService],
  controllers: [TipoProyectoController],
  exports: [TipoProyectoService],
})
export class TipoProyectoModule {}
