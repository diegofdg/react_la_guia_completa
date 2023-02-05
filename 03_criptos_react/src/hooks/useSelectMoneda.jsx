import styled from "@emotion/styled";

const Label = styled.label`
  color: #FFF;
`

const useSelectMoneda = ( label, opciones ) => {
    
  const selectMonedas = () => (
    <>
      <Label>{label}</Label>
      <select>
        <option
          value=""
        >
          --Seleccione--
        </option>
        {opciones.map( opcion => (
          <option
            key={opcion.id}
            value={opcion.id}
          >
            {opcion.nombre}
          </option>
        ))}
      </select>
    </>

  )

  return [ selectMonedas ];
}

export default useSelectMoneda;