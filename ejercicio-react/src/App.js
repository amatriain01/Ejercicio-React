import React, { useState } from 'react';
import { Row, Card } from 'react-bootstrap';
import CampoEntrada from './Componentes/CampoEntrada';
import BotonOperacion from './Componentes/BotonOperacion';
import MostradorResultado from './Componentes/MostradorResultado';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const handleOperacion = (operation) => {
    let result;
    switch (operation) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        result = '';
    }
    setOperation(operation);
    setResult(result);
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
          <BotonOperacion onClick={() => handleOperacion('+')} style={{ fontWeight: operation === '+' ? 'bold' : 'normal' }} text="Sumar" />
          <BotonOperacion onClick={() => handleOperacion('-')} style={{ fontWeight: operation === '-' ? 'bold' : 'normal' }} text="Restar" />
        </Row>
        <Row style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <BotonOperacion onClick={() => handleOperacion('*')} style={{ fontWeight: operation === '*' ? 'bold' : 'normal' }} text="Multiplicar" />
          <BotonOperacion onClick={() => handleOperacion('/')} style={{ fontWeight: operation === '/' ? 'bold' : 'normal' }} text="Dividir" />
        </Row>
        <Row style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <MostradorResultado result={result} />
        </Row>
      </Card>
    </div >
  );
}

export default App;
