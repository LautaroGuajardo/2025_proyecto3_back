import { Schema, Document } from 'mongoose';

export interface AreaDocument extends Document {
  nombre: string;
  descripcion?: string;
}

export const AreaSchema = new Schema<AreaDocument>(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String },
  },
  { timestamps: true },
);
