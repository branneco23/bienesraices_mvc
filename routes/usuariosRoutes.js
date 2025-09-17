import express from "express";
import { formularioLogin, formularioRegistro, registrar, formularioOlvidePassword } from '../controllers/usuarioController.js';

const router = express.Router();

//GET para mostrar el formulario
router.get('/registro', formularioRegistro)

//POST para procesar los datos
router.post('/registro', registrar)

router.get('/login', formularioLogin);
router.get('/olvide-password', formularioOlvidePassword)

export default router