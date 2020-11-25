
import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';


import routes from './routes';
import './database';


const app = express();

app.use(express.json());
app.use(routes);


export default app;


app.listen(3333, () => {
  console.log('server started on port 3333!');
})
