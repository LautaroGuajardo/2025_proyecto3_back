import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTipoReclamoDto } from './dto/create-tipo-reclamo.dto';
import { TipoReclamoDocument } from './schemas/tipo-reclamo.schema';

@Injectable()
export class TipoReclamoService {
  constructor(
    @InjectModel('TipoReclamo') private model: Model<TipoReclamoDocument>,
  ) {}

  async create(data: CreateTipoReclamoDto) {
    const created = await this.model.create(data);
    return created.toObject();
  }

  async listAll() {
    return this.model.find().lean();
  }

  async findOne(id: string) {
    const doc = await this.model.findById(id).lean();
    if (!doc) throw new NotFoundException('TipoReclamo no encontrado');
    return doc;
  }

  async update(id: string, data: Partial<CreateTipoReclamoDto>) {
    const updated = await this.model
      .findByIdAndUpdate(id, data, { new: true })
      .lean();
    if (!updated) throw new NotFoundException('TipoReclamo no encontrado');
    return updated;
  }

  async remove(id: string) {
    const removed = await this.model.findByIdAndDelete(id).lean();
    if (!removed) throw new NotFoundException('TipoReclamo no encontrado');
    return removed;
  }
}

export default TipoReclamoService;
