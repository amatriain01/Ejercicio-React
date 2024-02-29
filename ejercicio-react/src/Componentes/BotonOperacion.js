import React from 'react';
import { Col, Button } from 'react-bootstrap';

const BotonOperacion = ({ onClick, text }) => {
    return (
        <Button onClick={onClick}>{text}</Button>
    );
}

export default BotonOperacion;
