import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "139fe9789cd770",
      pass: "9687595e2e6148"
    }
  });

  // Información del email
  const info = await transport.sendMail({
    from: '"Uptask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "Uptask - Confirma tu cuenta",
    text: "Comprueba tu cuenta en Uptask",
    html: `
      <p>Hola: ${nombre} Comprueba tu cuenta en Uptask</p>
      <p>Tu cuenta ya está casi lista, solo debes comprobarla en el siguiente enlace: <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a></p>
      <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
    `
  });
}

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "139fe9789cd770",
      pass: "9687595e2e6148"
    }
  });

  // Información del email
  const info = await transport.sendMail({
    from: '"Uptask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "Uptask - Reestablece tu password",
    text: "Reestablece tu password",
    html: `
      <p>Hola: ${nombre} has solicitado reestablecer tu password</p>
      <p>Sigue el siguiente enlace para generar un nuevo password: <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer password</a></p>
      <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
    `
  });
}