import React from 'react';
import Container from '@/components/Container/style';
import Today from './Today';

const Home = () => {
  return (
    <div>
      <Container>
        <h3>Hoje o seu treino será:</h3>
        <Today>
          <b>B</b>
        </Today>
      </Container>
    </div>
  )
}

export default Home;