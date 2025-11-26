import { Schema, Document } from 'mongoose';

export interface CriticidadDocument extends Document {
  nombre: string;
  descripcion?: string;
}

export const CriticidadSchema = new Schema<CriticidadDocument>(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String },
  },
  { timestamps: true },
);
