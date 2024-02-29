import React from 'react';
import { Button } from 'react-bootstrap';

const BotonOperacion = ({ onClick, operation, text, currentOperation }) => {
    return (
        <Button style={{ fontWeight: operation === currentOperation ? 'bold' : 'normal' }} onClick={onClick}>{text}</Button>
    );
}

export default BotonOperacion;
