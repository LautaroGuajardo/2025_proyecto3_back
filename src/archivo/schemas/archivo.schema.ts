import { Schema, Document, Types } from 'mongoose';

export interface ArchivoDocument extends Document {
  nombre: string;
  idTipoArchivo: Types.ObjectId | string;
  descripcion?: string;
}

export const ArchivoSchema = new Schema<ArchivoDocument>(
  {
    nombre: { type: String, required: true },
    idTipoArchivo: {
      type: Schema.Types.ObjectId,
      ref: 'TipoArchivo',
      required: true,
    },
    descripcion: { type: String },
  },
  { timestamps: true },
);
