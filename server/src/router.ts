import { Router } from 'express';
import { getManual, login } from './controller';

export const loginRouter = Router();
loginRouter.post('/api/login', login);
loginRouter.get('/api/manual_A0B1C2P00.pdf', getManual);
