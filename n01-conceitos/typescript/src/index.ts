import express from 'express';
import createuser from './services/CreateUser';

const app = express();

app.get('/', (request, response) => {
    const user = createuser("Leo");
    return response.json({ message: 'Hello World' });
});

app.listen(3333);