import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { TipoProyectoModule } from './tipo-proyecto/tipo-proyecto.module';
import { AreaModule } from './area/area.module';
import { SubAreaModule } from './subarea/subarea.module';
import { ArchivoModule } from './archivo/archivo.module';
import { RolUsuarioModule } from './rol-usuario/rol-usuario.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EstadoReclamoModule } from './estado-reclamo/estado-reclamo.module';
import { ReclamoModule } from './reclamo/reclamo.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI ||
        process.env.MONGO_URI ||
        'mongodb://localhost:27017/proyecto3',
    ),
    ClienteModule,
    ProyectoModule,
    TipoProyectoModule,
    AreaModule,
    SubAreaModule,
    ArchivoModule,
    RolUsuarioModule,
    UsuarioModule,
    EstadoReclamoModule,
    ReclamoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
