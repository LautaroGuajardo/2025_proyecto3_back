import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import SubAreaService from './subarea.service';
import SubAreaController from './subarea.controller';
import { SubAreaSchema } from './schemas/subarea.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'SubArea', schema: SubAreaSchema }]),
  ],
  providers: [SubAreaService],
  controllers: [SubAreaController],
  exports: [SubAreaService],
})
export class SubAreaModule {}
