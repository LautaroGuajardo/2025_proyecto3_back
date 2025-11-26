import { Schema, Document } from 'mongoose';

export interface RolUsuarioDocument extends Document {
  nombre: string;
  descripcion?: string;
}

export const RolUsuarioSchema = new Schema<RolUsuarioDocument>(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String },
  },
  { timestamps: true },
);
