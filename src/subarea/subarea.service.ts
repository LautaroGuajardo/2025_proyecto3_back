import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSubAreaDto } from './dto/create-subarea.dto';
import { SubAreaDocument } from './schemas/subarea.schema';

@Injectable()
export class SubAreaService {
  constructor(@InjectModel('SubArea') private model: Model<SubAreaDocument>) {}

  async create(data: CreateSubAreaDto) {
    const created = await this.model.create(data);
    return created.toObject();
  }

  async listAll() {
    return this.model.find().lean();
  }

  async findOne(id: string) {
    const doc = await this.model.findById(id).lean();
    if (!doc) throw new NotFoundException('SubArea no encontrada');
    return doc;
  }

  async update(id: string, data: Partial<CreateSubAreaDto>) {
    const updated = await this.model
      .findByIdAndUpdate(id, data, { new: true })
      .lean();
    if (!updated) throw new NotFoundException('SubArea no encontrada');
    return updated;
  }

  async remove(id: string) {
    const removed = await this.model.findByIdAndDelete(id).lean();
    if (!removed) throw new NotFoundException('SubArea no encontrada');
    return removed;
  }
}

export default SubAreaService;
