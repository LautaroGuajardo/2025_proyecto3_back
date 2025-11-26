import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import ClienteService from './cliente.service';
import { ClienteController } from './cliente.controller';
import { ClienteSchema } from './schemas/cliente.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cliente', schema: ClienteSchema }]),
  ],
  providers: [ClienteService],
  controllers: [ClienteController],
  exports: [ClienteService],
})
export class ClienteModule {}
