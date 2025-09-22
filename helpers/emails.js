import nodemailer from 'nodemailer'

const emailRegistro = async(datos) => {
    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const {email, nombre, token} = datos

    //Enviar el email
    await transport.sendMail({
        from: 'BienesRaices.com',
        to: email,
        subject: 'Confirma tu Cuenta en BienesRaices.com',
        text: 'Confirma tu Cuenta de BienesRaices.com',
        html: `
            <p>Hola ${nombre}, Comprueba tu cuenta en BienesRaices.com</p>

            <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace: 
            <a href="">Confirmar Cuenta</a>
            <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
            </p>
        `
    })
}

export {
    emailRegistro
}