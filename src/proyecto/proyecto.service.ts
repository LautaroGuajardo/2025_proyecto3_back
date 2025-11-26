import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { ProyectoDocument } from './schemas/proyecto.schema';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectModel('Proyecto') private proyectoModel: Model<ProyectoDocument>,
  ) {}

  async createProyecto(data: CreateProyectoDto) {
    if (!data.idCliente || !data.titulo || !data.idTipoProyecto)
      throw new BadRequestException('Faltan campos obligatorios');

    const created = await this.proyectoModel.create({
      titulo: data.titulo,
      descripcion: data.descripcion,
      fechaRegistro: data.fechaRegistro
        ? new Date(data.fechaRegistro)
        : new Date(),
      idCliente: data.idCliente,
      idTipoProyecto: data.idTipoProyecto,
    });

    return created.toObject();
  }

  async listAll() {
    return this.proyectoModel.find().lean();
  }

  async findOne(id: string) {
    const doc = await this.proyectoModel.findById(id).lean();
    if (!doc) throw new NotFoundException('Proyecto no encontrado');
    return doc;
  }

  async update(id: string, data: Partial<CreateProyectoDto>) {
    const updated = await this.proyectoModel
      .findByIdAndUpdate(
        id,
        {
          ...(data.titulo !== undefined ? { titulo: data.titulo } : {}),
          ...(data.descripcion !== undefined
            ? { descripcion: data.descripcion }
            : {}),
          ...(data.fechaRegistro !== undefined
            ? { fechaRegistro: new Date(data.fechaRegistro) }
            : {}),
          ...(data.idCliente !== undefined
            ? { idCliente: data.idCliente }
            : {}),
          ...(data.idTipoProyecto !== undefined
            ? { idTipoProyecto: data.idTipoProyecto }
            : {}),
        },
        { new: true },
      )
      .lean();
    if (!updated) throw new NotFoundException('Proyecto no encontrado');
    return updated;
  }

  async remove(id: string) {
    const removed = await this.proyectoModel.findByIdAndDelete(id).lean();
    if (!removed) throw new NotFoundException('Proyecto no encontrado');
    return removed;
  }
}

export default ProyectoService;
