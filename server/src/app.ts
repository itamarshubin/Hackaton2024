if (process.env.NODE_ENV === 'dev') require('dotenv').config();
import express from 'express';
import { loginRouter } from './router';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(loginRouter);

const startServer = () => {
  app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });
};
export default startServer;
