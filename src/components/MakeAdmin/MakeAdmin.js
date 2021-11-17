import React from 'react';
import { Badge, Container } from 'react-bootstrap';

const MakeAdmin = () => {
    return (
        <Container>
            <h1 className='mt-5 text-uppercase fw-bolder'>make admin
                <h5 className="d-inline-block text-uppercase align-text-top"><Badge bg="danger">HELLO</Badge></h5>
            </h1>
        </Container>
    );
};

export default MakeAdmin;