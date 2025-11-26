import { Schema, Document } from 'mongoose';

export interface TipoProyectoDocument extends Document {
  nombre: string;
  descripcion?: string;
}

export const TipoProyectoSchema = new Schema<TipoProyectoDocument>(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String },
  },
  { timestamps: true },
);
