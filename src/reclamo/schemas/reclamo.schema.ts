import { Schema, Document, Types } from 'mongoose';

export interface ReclamoDocument extends Document {
  codigoReclamo: string;
  titulo: string;
  descripcion?: string;
  resolucionFinal?: string;
  idProyecto: Types.ObjectId | string;
  idSubArea: Types.ObjectId | string;
  idUsuario: Types.ObjectId | string;
  idCriticidad: Types.ObjectId | string;
  idPrioridad: Types.ObjectId | string;
  idTipoReclamo: Types.ObjectId | string;
  idEstadoReclamo: Types.ObjectId | string;
  idArchivo?: Types.ObjectId | string;
  fechaRegistro: Date;
}

export const ReclamoSchema = new Schema<ReclamoDocument>(
  {
    codigoReclamo: { type: String, required: true, unique: true },
    titulo: { type: String, required: true },
    descripcion: { type: String },
    resolucionFinal: { type: String },
    idProyecto: {
      type: Schema.Types.ObjectId,
      ref: 'Proyecto',
      required: true,
    },
    idSubArea: { type: Schema.Types.ObjectId, ref: 'SubArea', required: true },
    idUsuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    idCriticidad: {
      type: Schema.Types.ObjectId,
      ref: 'Criticidad',
      required: true,
    },
    idPrioridad: {
      type: Schema.Types.ObjectId,
      ref: 'Prioridad',
      required: true,
    },
    idTipoReclamo: {
      type: Schema.Types.ObjectId,
      ref: 'TipoReclamo',
      required: true,
    },
    idEstadoReclamo: {
      type: Schema.Types.ObjectId,
      ref: 'EstadoReclamo',
      required: true,
    },
    idArchivo: { type: Schema.Types.ObjectId, ref: 'Archivo' },
    fechaRegistro: { type: Date, default: () => new Date() },
  },
  { timestamps: true },
);
