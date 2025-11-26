import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAreaDto } from './dto/create-area.dto';
import { AreaDocument } from './schemas/area.schema';

@Injectable()
export class AreaService {
  constructor(@InjectModel('Area') private model: Model<AreaDocument>) {}

  async create(data: CreateAreaDto) {
    const created = await this.model.create(data);
    return created.toObject();
  }

  async listAll() {
    return this.model.find().lean();
  }

  async findOne(id: string) {
    const doc = await this.model.findById(id).lean();
    if (!doc) throw new NotFoundException('Area no encontrada');
    return doc;
  }

  async update(id: string, data: Partial<CreateAreaDto>) {
    const updated = await this.model
      .findByIdAndUpdate(id, data, { new: true })
      .lean();
    if (!updated) throw new NotFoundException('Area no encontrada');
    return updated;
  }

  async remove(id: string) {
    const removed = await this.model.findByIdAndDelete(id).lean();
    if (!removed) throw new NotFoundException('Area no encontrada');
    return removed;
  }
}

export default AreaService;
