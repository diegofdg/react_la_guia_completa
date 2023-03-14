import { Container } from 'react-bootstrap';
import Formulario from './components/Formulario';
import ListadosBebidas from './components/ListadosBebidas';
import { CategoriasProvider } from './context/CategoriasProvider';
import { BebidasProvider } from './context/BebidasProvider';

function App() {  

  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>
        <Container className='mt-5'>
          <Formulario />
          <ListadosBebidas />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App;
