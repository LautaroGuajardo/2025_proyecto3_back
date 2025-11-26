import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEstadoReclamoDto } from './dto/create-estado-reclamo.dto';
import { EstadoReclamoDocument } from './schemas/estado-reclamo.schema';

@Injectable()
export class EstadoReclamoService {
  constructor(
    @InjectModel('EstadoReclamo') private model: Model<EstadoReclamoDocument>,
  ) {}

  async create(data: CreateEstadoReclamoDto) {
    const created = await this.model.create(data);
    return created.toObject();
  }

  async listAll() {
    return this.model.find().lean();
  }

  async findOne(id: string) {
    const doc = await this.model.findById(id).lean();
    if (!doc) throw new NotFoundException('EstadoReclamo no encontrado');
    return doc;
  }

  async update(id: string, data: Partial<CreateEstadoReclamoDto>) {
    const updated = await this.model
      .findByIdAndUpdate(id, data, { new: true })
      .lean();
    if (!updated) throw new NotFoundException('EstadoReclamo no encontrado');
    return updated;
  }

  async remove(id: string) {
    const removed = await this.model.findByIdAndDelete(id).lean();
    if (!removed) throw new NotFoundException('EstadoReclamo no encontrado');
    return removed;
  }
}

export default EstadoReclamoService;
