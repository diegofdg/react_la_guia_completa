import { Col, Card, Button } from "react-bootstrap";

const Bebida = ({bebida}) => {
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        />
        <Card.Body>
          <Card.Title>
            {bebida.strDrink}
          </Card.Title>
          <Button 
            variant={'warning'}
            className="w-100 text-uppercase mt-2"
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Bebida;