import { Router, Request, Response } from 'express';
import AuthService from './auth.service';

interface LoginPayload {
  email?: string;
  password?: string;
}

const router = Router();
const service = new AuthService();

// Login route: validates email format and password
router.post(
  '/login',
  async (req: Request<object, any, LoginPayload>, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: 'Email y password son requeridos' });
    // basic email format check
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email))
      return res.status(400).json({ error: 'Email inválido' });

    const result = await service.validateCredentials(email, password);
    if (!result)
      return res.status(401).json({ error: 'Credenciales inválidas' });

    // In a real app, return JWT
    res.json({ ok: true, message: 'Login exitoso', user: { email } });
  },
);

export default router;
