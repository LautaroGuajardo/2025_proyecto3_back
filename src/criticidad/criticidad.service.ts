import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCriticidadDto } from './dto/create-criticidad.dto';
import { CriticidadDocument } from './schemas/criticidad.schema';

@Injectable()
export class CriticidadService {
  constructor(
    @InjectModel('Criticidad') private model: Model<CriticidadDocument>,
  ) {}

  async create(data: CreateCriticidadDto) {
    const created = await this.model.create(data);
    return created.toObject();
  }

  async listAll() {
    return this.model.find().lean();
  }

  async findOne(id: string) {
    const doc = await this.model.findById(id).lean();
    if (!doc) throw new NotFoundException('Criticidad no encontrada');
    return doc;
  }

  async update(id: string, data: Partial<CreateCriticidadDto>) {
    const updated = await this.model
      .findByIdAndUpdate(id, data, { new: true })
      .lean();
    if (!updated) throw new NotFoundException('Criticidad no encontrada');
    return updated;
  }

  async remove(id: string) {
    const removed = await this.model.findByIdAndDelete(id).lean();
    if (!removed) throw new NotFoundException('Criticidad no encontrada');
    return removed;
  }
}

export default CriticidadService;
