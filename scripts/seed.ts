import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load .env into process.env so MONGO_URI from the project's .env is used when present
dotenv.config();

import { ClienteSchema } from '../src/cliente/schemas/cliente.schema';
import { ProyectoSchema } from '../src/proyecto/schemas/proyecto.schema';
import { TipoProyectoSchema } from '../src/tipo-proyecto/schemas/tipo-proyecto.schema';
import { CriticidadSchema } from '../src/criticidad/schemas/criticidad.schema';
import { PrioridadSchema } from '../src/prioridad/schemas/prioridad.schema';
import { AreaSchema } from '../src/area/schemas/area.schema';
import { SubAreaSchema } from '../src/subarea/schemas/subarea.schema';
import { RolUsuarioSchema } from '../src/rol-usuario/schemas/rol-usuario.schema';
import { UsuarioSchema } from '../src/usuario/schemas/usuario.schema';
import { EstadoReclamoSchema } from '../src/estado-reclamo/schemas/estado-reclamo.schema';
import { TipoReclamoSchema } from '../src/tipo-reclamo/schemas/tipo-reclamo.schema';
import { ReclamoSchema } from '../src/reclamo/schemas/reclamo.schema';

const MONGO =
  process.env.MONGO_URI ||
  process.env.MONGODB_URI ||
  'mongodb://localhost:27017/proyecto3';

function getModel<T = any>(
    name: string, 
    schema: mongoose.Schema<T>
): mongoose.Model<T> {
  // reuse model if already registered
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (mongoose.models as any)[name] || mongoose.model<T>(name, schema);
}

async function seed() {
  await mongoose.connect(MONGO);
  console.log('Connected to', MONGO);

  const Cliente = getModel('Cliente', ClienteSchema);
  const Proyecto = getModel('Proyecto', ProyectoSchema);
  const TipoProyecto = getModel('TipoProyecto', TipoProyectoSchema);
  const Criticidad = getModel('Criticidad', CriticidadSchema);
  const Prioridad = getModel('Prioridad', PrioridadSchema);
  const Area = getModel('Area', AreaSchema);
  const SubArea = getModel('SubArea', SubAreaSchema);
  const RolUsuario = getModel('RolUsuario', RolUsuarioSchema);
  const Usuario = getModel('Usuario', UsuarioSchema);
  const EstadoReclamo = getModel('EstadoReclamo', EstadoReclamoSchema);
  const TipoReclamo = getModel('TipoReclamo', TipoReclamoSchema);
  const Reclamo = getModel('Reclamo', ReclamoSchema);

  // Clear relevant collections (non-destructive for others)
  await Promise.all([
    RolUsuario.deleteMany({}),
    Usuario.deleteMany({}),
    Cliente.deleteMany({}),
    TipoProyecto.deleteMany({}),
    Proyecto.deleteMany({}),
    Criticidad.deleteMany({}),
    Prioridad.deleteMany({}),
    Area.deleteMany({}),
    SubArea.deleteMany({}),
    EstadoReclamo.deleteMany({}),
    TipoReclamo.deleteMany({}),
  ]);

  // Roles
  const rolAdmin = await RolUsuario.create({
    nombre: 'administrador',
    descripcion: 'Usuario con permisos administrativos',
  });
  const rolEmpleado = await RolUsuario.create({
    nombre: 'empleado',
    descripcion: 'Usuario con permisos estándar',
  });

  // Cliente
  const cliente = await Cliente.create({
    nombre: 'Juan',
    apellido: 'Pérez',
    correo: 'juan.perez@example.com',
    password: 'secret123',
    telefono: '987654321',
  });

  // TipoProyecto (3)
  const tp1 = await TipoProyecto.create({
    nombre: 'Software',
    descripcion: 'Desarrollo de aplicaciones',
  });
  const tp2 = await TipoProyecto.create({
    nombre: 'Marketing',
    descripcion: 'Campañas y comunicación',
  });
  const tp3 = await TipoProyecto.create({
    nombre: 'Consultoría',
    descripcion: 'Asesoría técnica',
  });

  // Proyecto
  const proyecto = await Proyecto.create({
    titulo: 'Proyecto Alpha',
    descripcion: 'Proyecto de ejemplo',
    fechaRegistro: new Date(),
    idCliente: cliente._id,
    idTipoProyecto: tp1._id,
  });

  // Criticidad (3 niveles)
  const cLow = await Criticidad.create({
    nombre: 'Baja',
    descripcion: 'Baja criticidad',
  });
  const cMed = await Criticidad.create({
    nombre: 'Media',
    descripcion: 'Criticidad media',
  });
  const cHigh = await Criticidad.create({
    nombre: 'Alta',
    descripcion: 'Alta criticidad',
  });

  // Prioridad (3 niveles)
  const pLow = await Prioridad.create({
    nombre: 'Baja',
    descripcion: 'Baja prioridad',
  });
  const pMed = await Prioridad.create({
    nombre: 'Media',
    descripcion: 'Prioridad media',
  });
  const pHigh = await Prioridad.create({
    nombre: 'Alta',
    descripcion: 'Alta prioridad',
  });

  // Area and Subareas
  const area = await Area.create({
    nombre: 'Soporte',
    descripcion: 'Área de soporte técnico',
  });
  const sub1 = await SubArea.create({
    nombre: 'Soporte Nivel 1',
    descripcion: 'Atención inicial',
    idArea: area._id,
  });
  const sub2 = await SubArea.create({
    nombre: 'Soporte Nivel 2',
    descripcion: 'Atención avanzada',
    idArea: area._id,
  });

  // Usuarios (2) - one admin, one empleado
  const userAdmin = await Usuario.create({
    nombre: 'Ana',
    apellido: 'Gómez',
    correo: 'ana.gomez@example.com',
    password: 'adminpass',
    telefono: '600111222',
    idSubArea: sub1._id,
    idRolUsuario: rolAdmin._id,
  });

  const userEmpleado = await Usuario.create({
    nombre: 'Luis',
    apellido: 'Martínez',
    correo: 'luis.martinez@example.com',
    password: 'empleadopass',
    telefono: '600333444',
    idSubArea: sub2._id,
    idRolUsuario: rolEmpleado._id,
  });

  // EstadoReclamo (3)
  const ePendiente = await EstadoReclamo.create({
    nombre: 'pendiente',
    descripcion: 'Reclamo pendiente',
  });
  const eProceso = await EstadoReclamo.create({
    nombre: 'en proceso',
    descripcion: 'Reclamo en proceso',
  });
  const eResuelto = await EstadoReclamo.create({
    nombre: 'resuelto',
    descripcion: 'Reclamo resuelto',
  });

  // TipoReclamo (2)
  const tr1 = await TipoReclamo.create({
    nombre: 'Queja',
    descripcion: 'Queja del cliente',
  });
  const tr2 = await TipoReclamo.create({
    nombre: 'Consulta',
    descripcion: 'Consulta general',
  });

  // Reclamo (vinculado a los documentos creados)
  const reclamo = await Reclamo.create({
    codigoReclamo: 'R-0001',
    titulo: 'Falla en Producto',
    descripcion: 'El cliente reporta que el producto no enciende.',
    idProyecto: proyecto._id,
    idSubArea: sub1._id,
    idUsuario: userAdmin._id,
    idCriticidad: cMed._id,
    idPrioridad: pHigh._id,
    idTipoReclamo: tr1._id,
    idEstadoReclamo: ePendiente._id,
    fechaRegistro: new Date(),
  });

  console.log('Seed completed:');
  console.log({
    cliente: cliente._id.toString(),
    proyecto: proyecto._id.toString(),
    tipoProyectos: [tp1._id.toString(), tp2._id.toString(), tp3._id.toString()],
    criticidades: [
      cLow._id.toString(),
      cMed._id.toString(),
      cHigh._id.toString(),
    ],
    prioridades: [
      pLow._id.toString(),
      pMed._id.toString(),
      pHigh._id.toString(),
    ],
    area: area._id.toString(),
    subareas: [sub1._id.toString(), sub2._id.toString()],
    roles: [rolAdmin._id.toString(), rolEmpleado._id.toString()],
    usuarios: [userAdmin._id.toString(), userEmpleado._id.toString()],
    estados: [
      ePendiente._id.toString(),
      eProceso._id.toString(),
      eResuelto._id.toString(),
    ],
    tiposReclamo: [tr1._id.toString(), tr2._id.toString()],
    reclamo: reclamo._id.toString(),
  });

  await mongoose.disconnect();
  console.log('Disconnected.');
}

seed()
  .catch((err) => {
    console.error('Seed error', err);
    process.exit(1);
  })
  .then(() => process.exit(0));
