import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePrioridadDto } from './dto/create-prioridad.dto';
import { PrioridadDocument } from './schemas/prioridad.schema';

@Injectable()
export class PrioridadService {
  constructor(
    @InjectModel('Prioridad') private model: Model<PrioridadDocument>,
  ) {}

  async create(data: CreatePrioridadDto) {
    const created = await this.model.create(data);
    return created.toObject();
  }

  async listAll() {
    return this.model.find().lean();
  }

  async findOne(id: string) {
    const doc = await this.model.findById(id).lean();
    if (!doc) throw new NotFoundException('Prioridad no encontrada');
    return doc;
  }

  async update(id: string, data: Partial<CreatePrioridadDto>) {
    const updated = await this.model
      .findByIdAndUpdate(id, data, { new: true })
      .lean();
    if (!updated) throw new NotFoundException('Prioridad no encontrada');
    return updated;
  }

  async remove(id: string) {
    const removed = await this.model.findByIdAndDelete(id).lean();
    if (!removed) throw new NotFoundException('Prioridad no encontrada');
    return removed;
  }
}

export default PrioridadService;
