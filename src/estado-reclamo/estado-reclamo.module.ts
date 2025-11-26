import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import EstadoReclamoService from './estado-reclamo.service';
import EstadoReclamoController from './estado-reclamo.controller';
import { EstadoReclamoSchema } from './schemas/estado-reclamo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'EstadoReclamo', schema: EstadoReclamoSchema },
    ]),
  ],
  providers: [EstadoReclamoService],
  controllers: [EstadoReclamoController],
  exports: [EstadoReclamoService],
})
export class EstadoReclamoModule {}
