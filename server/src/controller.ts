import { RequestHandler } from 'express';
import mails from './mocks/mails';

export const login: RequestHandler = (req, res) => {
  const password = req.body.password;

  if (password === (process.env.LOGIN_PASSWORD || 8888)) {
    res.json({ mails });
  } else {
    res.status(401).send('access denied');
  }
};
