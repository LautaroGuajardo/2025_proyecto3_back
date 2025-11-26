import { Schema, Document, Types } from 'mongoose';

export interface ProyectoDocument extends Document {
  titulo: string;
  descripcion?: string;
  fechaRegistro: Date;
  idCliente: Types.ObjectId | string;
  idTipoProyecto: Types.ObjectId | string;
}

export const ProyectoSchema = new Schema<ProyectoDocument>(
  {
    titulo: { type: String, required: true },
    descripcion: { type: String },
    fechaRegistro: { type: Date, default: () => new Date() },
    idCliente: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
    idTipoProyecto: {
      type: Schema.Types.ObjectId,
      ref: 'TipoProyecto',
      required: true,
    },
  },
  { timestamps: true },
);
