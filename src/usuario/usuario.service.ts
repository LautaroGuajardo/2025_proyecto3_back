import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioDocument } from './schemas/usuario.schema';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel('Usuario') private usuarioModel: Model<UsuarioDocument>,
  ) {}

  async createUsuario(data: CreateUsuarioDto) {
    const exists = await this.usuarioModel
      .findOne({ correo: data.correo })
      .lean();
    if (exists)
      throw new BadRequestException('Ya existe un usuario con ese correo');
    const created = await this.usuarioModel.create({
      nombre: data.nombre,
      apellido: data.apellido,
      correo: data.correo,
      password: data.password,
      telefono: data.telefono,
      fechaRegistro: data.fechaRegistro
        ? new Date(data.fechaRegistro)
        : new Date(),
      estaActivo: data.estaActivo !== undefined ? data.estaActivo : true,
      idSubArea: data.idSubArea,
      idRolUsuario: data.idRolUsuario,
    });
    const { password: _, ...obj } = created.toObject();
    return obj;
  }

  async listAll() {
    return this.usuarioModel.find().select('-password').lean();
  }

  async findOne(id: string) {
    return this.usuarioModel.findById(id).select('-password').lean();
  }
}

export default UsuarioService;
