import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import CampoEntrada from './Componentes/CampoEntrada';
import MostradorResultado from './Componentes/MostradorResultado';
import './App.css';

function App() {
  const [num1, setNum1] = useState('0');
  const [num2, setNum2] = useState('0');
  const [result, setResult] = useState('0');
  const [clickedButton, setClickedButton] = useState('+');

  const calculateResult = useCallback(() => {
    let result;
    switch (clickedButton) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = '0';
    }
    setResult(result);
  }, [num1, num2, clickedButton]);

  useEffect(() => {
    calculateResult();
  }, [calculateResult]);

  const handleOperation = (operation) => {
    setClickedButton(operation);
  };

  return (
    <>
      <div>
        <h1 className="text-center mt-5">Calculadora</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Card className="shadow" style={{ width: '30rem', padding: '20px' }}>
          <Row>
            <Col>
              <CampoEntrada
                controlId="num1"
                label="A:"
                value={num1}
                onChange={setNum1}
              />
            </Col>
            <Col>
              <CampoEntrada
                controlId="num2"
                label="B:"
                value={num2}
                onChange={setNum2}
              />
            </Col>
          </Row>
          <Row className="justify-content-center mt-3 mb-3 text-center">
            <Col>
              <Button onClick={() => handleOperation('+')} variant={clickedButton === '+' ? 'primary border-red' : 'primary border-blue'} className="w-100 mr-2">Sumar</Button>
            </Col>
            <Col>
              <Button onClick={() => handleOperation('-')} variant={clickedButton === '-' ? 'primary border-red' : 'primary border-blue'} className="w-100">Restar</Button>
            </Col>
          </Row>
          <Row className="justify-content-center mb-3 text-center">
            <Col>
              <Button onClick={() => handleOperation('*')} variant={clickedButton === '*' ? 'primary border-red' : 'primary border-blue'} className="w-100 mr-2">Multiplicar</Button>
            </Col>
            <Col>
              <Button onClick={() => handleOperation('/')} variant={clickedButton === '/' ? 'primary border-red' : 'primary border-blue'} className="w-100">Dividir</Button>
            </Col>
          </Row>
          <Row className="justify-content-center text-center">
            <MostradorResultado result={result} />
          </Row>
        </Card>
      </div >
    </>
  );
}

export default App;
