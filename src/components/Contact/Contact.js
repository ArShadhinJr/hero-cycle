import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Badge, Col, Container, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Contact = () => {
    const { user } = useAuth();
    console.log( user );
    return (
        <Col className="bg-gray p-4">
            <Container>
                <h1 className='mt-5  text-uppercase fw-bolder'>Complaine us
                    <small className=" text-uppercase align-baseline"><Badge bg="danger">open 24/7</Badge></small>
                </h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={user.email} />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Screen Shots (file max 2MB)</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write your problem in details.</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Please write your complaine in details here." />
                    </Form.Group>
                    <Button variant="warning" className="btn btn-warning">Submit Us</Button>
                </Form>
            </Container>
        </Col>
    );
};

export default Contact;