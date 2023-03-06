import { Container, Grid, Typography } from '@mui/material';

function App() {

  return (
    <Container>
        <header>
          <Typography
            align='center'
            marginY={5}
            component="h1"
            variant="h3"
            sx={{
              fontWeight: 'bold'
            }}
          >
            Buscador de Noticias
          </Typography>
        </header>
    </Container>
  )
}

export default App
