import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTipoArchivoDto } from './dto/create-tipo-archivo.dto';
import { TipoArchivoDocument } from './schemas/tipo-archivo.schema';

@Injectable()
export class TipoArchivoService {
  constructor(
    @InjectModel('TipoArchivo') private model: Model<TipoArchivoDocument>,
  ) {}

  async create(data: CreateTipoArchivoDto) {
    const created = await this.model.create(data);
    return created.toObject();
  }

  async listAll() {
    return this.model.find().lean();
  }

  async findOne(id: string) {
    const doc = await this.model.findById(id).lean();
    if (!doc) throw new NotFoundException('TipoArchivo no encontrado');
    return doc;
  }

  async update(id: string, data: Partial<CreateTipoArchivoDto>) {
    const updated = await this.model
      .findByIdAndUpdate(id, data, { new: true })
      .lean();
    if (!updated) throw new NotFoundException('TipoArchivo no encontrado');
    return updated;
  }

  async remove(id: string) {
    const removed = await this.model.findByIdAndDelete(id).lean();
    if (!removed) throw new NotFoundException('TipoArchivo no encontrado');
    return removed;
  }
}

export default TipoArchivoService;
