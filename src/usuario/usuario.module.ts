import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import UsuarioService from './usuario.service';
import UsuarioController from './usuario.controller';
import { UsuarioSchema } from './schemas/usuario.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Usuario', schema: UsuarioSchema }]),
  ],
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [UsuarioService],
})
export class UsuarioModule {}
