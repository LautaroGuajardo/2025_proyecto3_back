import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateQuery } from 'mongoose';
import { CreateReclamoDto } from './dto/create-reclamo.dto';
import { ReclamoDocument } from './schemas/reclamo.schema';

@Injectable()
export class ReclamoService {
  constructor(@InjectModel('Reclamo') private model: Model<ReclamoDocument>) {}

  async create(data: CreateReclamoDto) {
    if (!data.codigoReclamo || !data.titulo)
      throw new BadRequestException('Faltan campos obligatorios');
    const exists = await this.model
      .findOne({ codigoReclamo: data.codigoReclamo })
      .lean();
    if (exists)
      throw new BadRequestException('Ya existe un reclamo con ese código');
    const created = await this.model.create({
      codigoReclamo: data.codigoReclamo,
      titulo: data.titulo,
      descripcion: data.descripcion,
      resolucionFinal: data.resolucionFinal,
      idProyecto: data.idProyecto,
      idSubArea: data.idSubArea,
      idUsuario: data.idUsuario,
      idCriticidad: data.idCriticidad,
      idPrioridad: data.idPrioridad,
      idTipoReclamo: data.idTipoReclamo,
      idEstadoReclamo: data.idEstadoReclamo,
      idArchivo: data.idArchivo,
      fechaRegistro: data.fechaRegistro
        ? new Date(data.fechaRegistro)
        : new Date(),
    });
    return created.toObject();
  }

  async listAll() {
    return this.model.find().lean();
  }

  async findOne(id: string) {
    const doc = await this.model.findById(id).lean();
    if (!doc) throw new NotFoundException('Reclamo no encontrado');
    return doc;
  }

  async update(id: string, data: Partial<CreateReclamoDto>) {
    const updated = await this.model
      .findByIdAndUpdate(id, data as UpdateQuery<ReclamoDocument>, {
        new: true,
      })
      .lean();
    if (!updated) throw new NotFoundException('Reclamo no encontrado');
    return updated;
  }

  async remove(id: string) {
    const removed = await this.model.findByIdAndDelete(id).lean();
    if (!removed) throw new NotFoundException('Reclamo no encontrado');
    return removed;
  }
}

export default ReclamoService;
