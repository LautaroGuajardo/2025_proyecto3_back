import { Schema, Document } from 'mongoose';

export interface TipoArchivoDocument extends Document {
  nombreFormato: string;
}

export const TipoArchivoSchema = new Schema<TipoArchivoDocument>(
  {
    nombreFormato: { type: String, required: true },
  },
  { timestamps: true },
);
