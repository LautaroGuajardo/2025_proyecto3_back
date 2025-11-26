import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import AreaService from './area.service';
import AreaController from './area.controller';
import { AreaSchema } from './schemas/area.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Area', schema: AreaSchema }])],
  providers: [AreaService],
  controllers: [AreaController],
  exports: [AreaService],
})
export class AreaModule {}
