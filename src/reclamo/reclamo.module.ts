import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import ReclamoService from './reclamo.service';
import ReclamoController from './reclamo.controller';
import { ReclamoSchema } from './schemas/reclamo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Reclamo', schema: ReclamoSchema }]),
  ],
  providers: [ReclamoService],
  controllers: [ReclamoController],
  exports: [ReclamoService],
})
export class ReclamoModule {}
