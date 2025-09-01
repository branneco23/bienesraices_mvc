import express from 'express';
import usuarioRoutes from './routes/usuariosRoutes.js';
import db from './config/db.js';

//Crear la app
const app = express()

//Habilitar lectura de datos de formularios
app.use(express.urlencoded({extended: true}));

// Conexión a la base de datos
try {
    await db.authenticate();
    console.log("Conexión Correcta a la Base de Datos");
} catch (error) {
    console.error(error)
}

//Habilitar Pug
app.set('view engine', 'pug')
app.set('views', './views')

//Carpeta pública
app.use(express.static('public'))

//Routing
app.use('/auth', usuarioRoutes)



//Definir un puerto y arrancar el proyecto
const port = 3000;

app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`);
});