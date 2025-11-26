import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { ClienteDocument } from './schemas/cliente.schema';

@Injectable()
export class ClienteService {
  constructor(
    @InjectModel('Cliente') private clienteModel: Model<ClienteDocument>,
  ) {}

  async createCliente(data: CreateClienteDto) {
    const exists = await this.clienteModel
      .findOne({ correo: data.correo })
      .lean();
    if (exists)
      throw new BadRequestException('Ya existe un cliente con ese correo');
    const created = await this.clienteModel.create({
      nombre: data.nombre,
      apellido: data.apellido,
      correo: data.correo,
      password: data.password,
      telefono: data.telefono,
      fechaRegistro: data.fechaRegistro || new Date(),
      estaActivo: data.estaActivo !== undefined ? data.estaActivo : true,
    });
    // retorna sin contraseña
    const { password, ...obj } = created.toObject();
    return obj;
  }

  async listAll() {
    return this.clienteModel.find().select('-password').lean();
  }
}

export default ClienteService;
