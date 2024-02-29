import React from 'react';
import { Col } from 'react-bootstrap';

const MostradorResultado = ({ result }) => {
    return (
        <Col>
            <h2>Resultado: {result}</h2>
        </Col>
    );
}

export default MostradorResultado;