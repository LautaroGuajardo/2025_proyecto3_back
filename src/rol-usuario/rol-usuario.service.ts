import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRolUsuarioDto } from './dto/create-rol-usuario.dto';
import { RolUsuarioDocument } from './schemas/rol-usuario.schema';

@Injectable()
export class RolUsuarioService {
  constructor(
    @InjectModel('RolUsuario') private model: Model<RolUsuarioDocument>,
  ) {}

  async create(data: CreateRolUsuarioDto) {
    const created = await this.model.create(data);
    return created.toObject();
  }

  async listAll() {
    return this.model.find().lean();
  }

  async findOne(id: string) {
    const doc = await this.model.findById(id).lean();
    if (!doc) throw new NotFoundException('RolUsuario no encontrado');
    return doc;
  }

  async update(id: string, data: Partial<CreateRolUsuarioDto>) {
    const updated = await this.model
      .findByIdAndUpdate(id, data, { new: true })
      .lean();
    if (!updated) throw new NotFoundException('RolUsuario no encontrado');
    return updated;
  }

  async remove(id: string) {
    const removed = await this.model.findByIdAndDelete(id).lean();
    if (!removed) throw new NotFoundException('RolUsuario no encontrado');
    return removed;
  }
}

export default RolUsuarioService;
