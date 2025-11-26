import { Schema, Document } from 'mongoose';

export interface TipoReclamoDocument extends Document {
  nombre: string;
  descripcion?: string;
}

export const TipoReclamoSchema = new Schema<TipoReclamoDocument>(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String },
  },
  { timestamps: true },
);
