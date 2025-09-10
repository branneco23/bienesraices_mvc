import { check, validationResult} from 'express-validator'
import Usuario from '../models/Usuario.js'

const formularioLogin = (req, res) => {
    res.render('auth/login', {
        pagina:'Iniciar Sesión'
    })
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: "Crear Cuenta"
    })
}

const registrar = async (req, res) => {

    //Validación
    await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req);
   await check('email').isEmail().withMessage('Eso no parece un email').run(req);
    await check('password').isLength({min: 6}).withMessage('El Password debe ser de al menos 6 caracteres').run(req)
    await check('repitir_password').custom((value, {req}) => value === req.body.password).withMessage('Los Passwords no son iguales').run(req)

    let resultado = validationResult(req);

    //Verificar que el resultado este vacio
    if(!resultado.isEmpty()){
        //Errores
        return res.render('auth/registro', {
            pagina: 'Crear Cuenta',
            errores: resultado.array()
        })
    }

    const usuario = await Usuario.create(req.body);

    res.json(usuario);
}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password', {
        pagina: "Recupera tu acceso a Bienes Raices"
    })
}

export {
    formularioLogin,
    registrar,
    formularioRegistro,
    formularioOlvidePassword
}