export const formatearFecha = fecha => {
  const opciones = {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
  }
  return new Date(fecha).toLocaleDateString('es-ES', opciones)
}