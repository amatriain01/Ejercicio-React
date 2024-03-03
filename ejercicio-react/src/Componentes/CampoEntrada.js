import React from 'react';
import { Form } from 'react-bootstrap';

const CampoEntrada = ({ controlId, label, value, onChange }) => {
    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <Form.Group controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type="number"
                placeholder={`Ingrese un número`}
                value={value}
                onChange={handleChange}
            />
        </Form.Group>
    );
}

export default CampoEntrada;