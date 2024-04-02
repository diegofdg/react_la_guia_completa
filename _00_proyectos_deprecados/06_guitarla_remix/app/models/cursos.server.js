export async function getCursos() {
  const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
  return await respuesta.json();
}