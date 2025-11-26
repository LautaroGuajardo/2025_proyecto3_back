import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTipoProyectoDto } from './dto/create-tipo-proyecto.dto';
import { TipoProyectoDocument } from './schemas/tipo-proyecto.schema';

@Injectable()
export class TipoProyectoService {
  constructor(
    @InjectModel('TipoProyecto') private tipoModel: Model<TipoProyectoDocument>,
  ) {}

  async create(data: CreateTipoProyectoDto) {
    const created = await this.tipoModel.create(data);
    return created.toObject();
  }

  async listAll() {
    return this.tipoModel.find().lean();
  }

  async findOne(id: string) {
    const doc = await this.tipoModel.findById(id).lean();
    if (!doc) throw new NotFoundException('TipoProyecto no encontrado');
    return doc;
  }

  async update(id: string, data: Partial<CreateTipoProyectoDto>) {
    const updated = await this.tipoModel
      .findByIdAndUpdate(id, data, { new: true })
      .lean();
    if (!updated) throw new NotFoundException('TipoProyecto no encontrado');
    return updated;
  }

  async remove(id: string) {
    const removed = await this.tipoModel.findByIdAndDelete(id).lean();
    if (!removed) throw new NotFoundException('TipoProyecto no encontrado');
    return removed;
  }
}

export default TipoProyectoService;
