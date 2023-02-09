export default function app() {
  return (
    <Document>
        <h1>Hola Mundo desde Remix</h1>
    </Document>
  )
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <title>GuitarLA - Remix</title>
      </head>
      <body>
        {children}                
      </body>
    </html>
  )
}