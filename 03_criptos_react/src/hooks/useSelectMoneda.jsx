import styled from "@emotion/styled";

const Label = styled.label`
  color: #FFF;
`

const useSelectMoneda = ( label ) => {
    
  const selectMonedas = () => (
    <>
      <Label>{label}</Label>
    </>

  )

  return [ selectMonedas ];
}

export default useSelectMoneda;