import { RequestHandler } from 'express';

export const login: RequestHandler = (req, res) => {
  const password = req.body.password;

  if (password === (process.env.LOGIN_PASSWORD || 8888)) {
    res.send('ok');
  } else {
    res.status(401).send('access denied');
  }
};
