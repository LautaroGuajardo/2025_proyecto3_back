import { Router, Request, Response } from 'express';
import ReportesService from './reportes.service';

const router = Router();
const service = new ReportesService();

// Query reports with filters (cliente, proyecto, area, estado, fecha)
router.get('/', async (req: Request, res: Response) => {
  const filters = req.query;
  const report = await service.getReport(filters);
  res.json(report);
});

// Export CSV
router.get('/export', async (req: Request, res: Response) => {
  const csv = await service.exportCsv(req.query);
  res.header('Content-Type', 'text/csv');
  res.send(csv);
});

export default router;
