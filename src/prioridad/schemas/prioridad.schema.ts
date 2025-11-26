import { Schema, Document } from 'mongoose';

export interface PrioridadDocument extends Document {
  nombre: string;
  descripcion?: string;
}

export const PrioridadSchema = new Schema<PrioridadDocument>(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String },
  },
  { timestamps: true },
);
