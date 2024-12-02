if (process.env.NODE_ENV === 'dev') require('dotenv').config();
import express from 'express';
import { loginRouter } from './router';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT;

app.use(cookieParser());
app.use(cors({ credentials: true, origin: ['http://localhost:5173', 'http://localhost:8080'] }));
app.use(bodyParser.json());
app.use(loginRouter);

const startServer = () => {
  app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });
};
export default startServer;
