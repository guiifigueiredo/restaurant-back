import express from 'express';
import mongoose from 'mongoose';

import {router} from './router';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 3000;

    app.use(express.json());
    app.use(router);

    app.listen(port, ()=>{
      console.log(`O servidor esta rodando na porta ${port}`);
    });
  })
  .catch(() => console.log('erro ao conectar com o banco de dados'));
