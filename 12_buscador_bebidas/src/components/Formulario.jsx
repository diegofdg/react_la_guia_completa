import { Button, Form, Row, Col } from 'react-bootstrap';
import useCategorias from '../hooks/useCategorias';

const Formulario = () => {
  const { categorias } = useCategorias();
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
            <Form.Control
              id="nombre"
              type="text"
              placeholder="Ej: Tequila, Vodka, etc"
              name="nombre"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
              <Form.Label htmlFor="categoria">Categoría Bebida</Form.Label>
              <Form.Select
                id="categoria"
                name="categoria"
              >
                <option>-- Selecciona categoría --</option>
                {categorias.map(categoria => (
                  <option
                    key={categoria.strCategory}
                    value={categoria.strCategory}
                  >{categoria.strCategory}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            variant="danger"
            className="text-uppercase w-100"
          >
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default Formulario