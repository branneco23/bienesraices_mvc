import express from 'express';

//Crear la app
const app = express()

//Routing
app.get('/', function(res, req) {
    res.json({msg: 'Hola Mundo en express'});
});

app.get('/nosotros', function(res, req) {
    res.send('información de nosotros');
});

//Definir un puerto y arrancar el proyecto
const port = 3000;

app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`);
});