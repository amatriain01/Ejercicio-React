import React, { useState } from 'react';
import { Row, Card } from 'react-bootstrap';
import InputField from './Componentes/CampoEntrada';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
      <Card style={{ width: '30rem', padding: '20px' }}>
        <Row>
          <InputField
            controlId="num1"
            label="A:"
            value={num1}
            onChange={setNum1}
          />
          <InputField
            controlId="num2"
            label="B:"
            value={num2}
            onChange={setNum2}
          />
        </Row>
      </Card>
    </div >
  );
}

export default App;
