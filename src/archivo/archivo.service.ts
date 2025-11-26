import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArchivoDto } from './dto/create-archivo.dto';
import { ArchivoDocument } from './schemas/archivo.schema';

@Injectable()
export class ArchivoService {
  constructor(@InjectModel('Archivo') private model: Model<ArchivoDocument>) {}

  async create(data: CreateArchivoDto) {
    const created = await this.model.create(data);
    return created.toObject();
  }

  async listAll() {
    return this.model.find().lean();
  }

  async findOne(id: string) {
    const doc = await this.model.findById(id).lean();
    if (!doc) throw new NotFoundException('Archivo no encontrado');
    return doc;
  }

  async update(id: string, data: Partial<CreateArchivoDto>) {
    const updated = await this.model
      .findByIdAndUpdate(id, data, { new: true })
      .lean();
    if (!updated) throw new NotFoundException('Archivo no encontrado');
    return updated;
  }

  async remove(id: string) {
    const removed = await this.model.findByIdAndDelete(id).lean();
    if (!removed) throw new NotFoundException('Archivo no encontrado');
    return removed;
  }
}

export default ArchivoService;
