import dotenv from 'dotenv';
import express from 'express';
import auth from './routes/auth/authRoute';
import ClientError from './tools/error-builder/clientError';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/auth', auth);

app.use((req, res, next) => {
  if (res.locals.data) {
    // console.log('accepted)');

    res.send(res.locals.data);
  }

  next();
});

app.use((err, req, res, next) => {
  // console.log('error middleware: ', err.message)

  // console.log('qqqqq: ', err.constructor);
  if (err instanceof ClientError) {
    // console.log('--------------------====--------------', err.name);
    res.send({
      error: JSON.parse(err.message),
      status: err.status,
      code: err.code
    });
  }

  next();
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
