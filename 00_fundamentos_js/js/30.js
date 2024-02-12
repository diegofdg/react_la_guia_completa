// Fetch API  - Async Await

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = async () => {
    const respuesta = await fetch(url)
    console.log('Después de respuesta')

    const resultado = await respuesta.json()
    console.log('Después de resultado')
    resultado.forEach( comentario => {
        console.log(comentario)
    })
}

consultarAPI();