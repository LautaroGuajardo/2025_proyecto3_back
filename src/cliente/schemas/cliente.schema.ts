import { Schema, Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

export interface ClienteDocument extends Document {
  nombre: string;
  apellido: string;
  correo: string;
  password: string;
  telefono?: string;
  fechaRegistro: Date;
  estaActivo: boolean;
}

export const ClienteSchema = new Schema<ClienteDocument>(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    correo: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    telefono: { type: String },
    fechaRegistro: { type: Date, default: () => new Date() },
    estaActivo: { type: Boolean, default: true },
  },
  { timestamps: true },
);

// Hash password before saving
ClienteSchema.pre('save', async function (next) {
  const user = this as ClienteDocument;
  if (!user.isModified || typeof user.isModified !== 'function') return next();
  if (!user.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (err) {
    next(err as Error);
  }
});
