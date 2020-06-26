import express from 'express';

const app = express();

app.get('/', (request, response) => {
    const a = 'q23';
    return response.json({message: 'Get route'});
});

app.listen(3333, () =>{
    console.log('Server started on port 3333');
});