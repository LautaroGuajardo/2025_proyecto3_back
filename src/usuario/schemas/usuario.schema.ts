import { Schema, Document, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';

export interface UsuarioDocument extends Document {
  nombre: string;
  apellido: string;
  correo: string;
  password: string;
  telefono?: string;
  fechaRegistro: Date;
  estaActivo: boolean;
  idSubArea: Types.ObjectId | string;
  idRolUsuario: Types.ObjectId | string;
}

export const UsuarioSchema = new Schema<UsuarioDocument>(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    correo: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    telefono: { type: String },
    fechaRegistro: { type: Date, default: () => new Date() },
    estaActivo: { type: Boolean, default: true },
    idSubArea: { type: Schema.Types.ObjectId, ref: 'SubArea', required: true },
    idRolUsuario: {
      type: Schema.Types.ObjectId,
      ref: 'RolUsuario',
      required: true,
    },
  },
  { timestamps: true },
);

UsuarioSchema.pre<UsuarioDocument>('save', async function (next) {
  // Si la contraseña no fue modificada, continuar
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err as Error);
  }
});
