import { Schema, Document, Types } from 'mongoose';

export interface SubAreaDocument extends Document {
  nombre: string;
  descripcion?: string;
  idArea: Types.ObjectId | string;
}

export const SubAreaSchema = new Schema<SubAreaDocument>(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String },
    idArea: { type: Schema.Types.ObjectId, ref: 'Area', required: true },
  },
  { timestamps: true },
);
