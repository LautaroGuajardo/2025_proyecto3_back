import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import RolUsuarioService from './rol-usuario.service';
import RolUsuarioController from './rol-usuario.controller';
import { RolUsuarioSchema } from './schemas/rol-usuario.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'RolUsuario', schema: RolUsuarioSchema },
    ]),
  ],
  providers: [RolUsuarioService],
  controllers: [RolUsuarioController],
  exports: [RolUsuarioService],
})
export class RolUsuarioModule {}
