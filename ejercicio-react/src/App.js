import React, { useState } from 'react';
import { Row, Card } from 'react-bootstrap';
import CampoEntrada from './Componentes/CampoEntrada';
import BotonOperacion from './Componentes/BotonOperacion';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleOperacion = (operador) => {
    let res;
    switch (operador) {
      case '+':
        res = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        res = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        res = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        res = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        res = '';
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
      <Card style={{ width: '30rem', padding: '20px' }}>
        <Row>
          <CampoEntrada
            controlId="num1"
            label="A:"
            value={num1}
            onChange={setNum1}
          />
          <CampoEntrada
            controlId="num2"
            label="B:"
            value={num2}
            onChange={setNum2}
          />
        </Row>
        <Row style={{ padding: '10px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <BotonOperacion onClick={() => handleOperacion('+')} text="Sumar" />
          <BotonOperacion onClick={() => handleOperacion('-')} text="Restar" />
        </Row>
        <Row style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <BotonOperacion onClick={() => handleOperacion('*')} text="Multiplicar" />
          <BotonOperacion onClick={() => handleOperacion('/')} text="Dividir" />
        </Row>
      </Card>
    </div >
  );
}

export default App;
