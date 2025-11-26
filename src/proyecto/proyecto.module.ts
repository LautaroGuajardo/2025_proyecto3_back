import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import ProyectoService from './proyecto.service';
import ProyectoController from './proyecto.controller';
import { ProyectoSchema } from './schemas/proyecto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Proyecto', schema: ProyectoSchema }]),
  ],
  providers: [ProyectoService],
  controllers: [ProyectoController],
  exports: [ProyectoService],
})
export class ProyectoModule {}
