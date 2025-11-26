export class UsuarioEntity {
  id!: string;
  email!: string;
  passwordHash?: string;
  roles: string[] = [];
}
