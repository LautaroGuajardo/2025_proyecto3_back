class ReportesService {
  async getReport(filters: any) {
    // Placeholder: return empty report structure with expected metrics keys
    return {
      filtros: filters,
      metas: {
        reclamosPorMes: [],
        reclamosResueltos: 0,
        reclamosEnCurso: 0,
        tiempoPromedioResolucion: 0,
        tiposFrecuentes: [],
        cargaPorArea: [],
      },
    };
  }

  async exportCsv(filters: any) {
    // placeholder CSV header
    const header = 'id,proyecto,cliente,area,estado,fecha\n';
    return header;
  }
}

export default ReportesService;
