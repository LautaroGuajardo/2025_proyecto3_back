import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import CriticidadService from './criticidad.service';
import CriticidadController from './criticidad.controller';
import { CriticidadSchema } from './schemas/criticidad.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Criticidad', schema: CriticidadSchema },
    ]),
  ],
  providers: [CriticidadService],
  controllers: [CriticidadController],
  exports: [CriticidadService],
})
export class CriticidadModule {}
