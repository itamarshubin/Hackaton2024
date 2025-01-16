import { RequestHandler } from 'express';
import mails from './mocks/mails';
import { join } from 'path';

export const login: RequestHandler = (req, res) => {
  const password = req.body.password;

  if (password === (process.env.LOGIN_PASSWORD || 8888)) {
    res.json({ mails });
  } else {
    res.status(401).send('access denied');
  }
};

export const getManual: RequestHandler = (req, res) => {
  const pdfPath = join(process.cwd(), 'files', 'manual.pdf'); // Adjust path to your PDF
  res.sendFile(pdfPath, (err) => {
      if (err) {
          console.error("Error sending file:", err);
          res.status(500).send("Could not load the PDF.");
      }
  });
};

