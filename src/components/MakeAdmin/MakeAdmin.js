import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Badge, ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap';

const MakeAdmin = () => {
    return (
        <Container>
            <h1 className='mt-5 text-uppercase fw-bolder'>make admin
                <h5 className="d-inline-block text-uppercase align-text-top"><Badge bg="danger">HELLO</Badge></h5>
            </h1>

            <Form>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Make Admin
                    </Form.Label>
                    <Col sm="10" md="5">
                        <Form.Control type="text" placeholder="entar email to make admin" />
                    </Col>
                </Form.Group>

                <ButtonGroup className="mb-5 text-center ">
                    {/* <Link to="/orderplace"></Link> */}
                    <Button type="submit" className="btn btn-warning">Make Admin</Button>
                </ButtonGroup>
            </Form>
        </Container>
    );
};

export default MakeAdmin;