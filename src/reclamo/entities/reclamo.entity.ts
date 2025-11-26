export class ReclamoEntity {
  id!: string;
  proyectoId!: string;
  tipo!: string;
  prioridad?: string;
  criticidad?: string;
  descripcion?: string;
  area!: string;
  evidencias: any[] = [];
  estado!: string;
  historialReasignaciones: any[] = [];
}
