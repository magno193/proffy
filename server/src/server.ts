import express, { json } from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Página acessada 😀');

  response.json({
    message: 'Welcome to the first page!',
  });
});

app.listen(3333);
