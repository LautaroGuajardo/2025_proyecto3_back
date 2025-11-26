import { Schema, Document } from 'mongoose';

export interface EstadoReclamoDocument extends Document {
  nombre: string;
  descripcion?: string;
}

export const EstadoReclamoSchema = new Schema<EstadoReclamoDocument>(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String },
  },
  { timestamps: true },
);
