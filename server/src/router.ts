import { Router } from 'express';
import { login } from './controller';

export const loginRouter = Router();
loginRouter.post('/login', login);
