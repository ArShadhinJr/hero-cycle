import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React from 'react';
import { ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        axios.post( 'http://localhost:5000/reviews', data )
            .then( res => {
                if ( res.data.insertedId ) {
                    alert( 'added successfully' );
                    reset();
                }
            } )
    }

    return (
        <Container className="py-5">
            <div className="fw-bolder text-center p-5 m-5 mb-0 pb-0">
                <h1 className="fs-1 text-warning">MY REVIWES</h1>
                <p>HERO CYCLE / MANAGE YOUR ALL REVIWES</p>
                <br /><br />

            </div>
            <Form onSubmit={handleSubmit( onSubmit )}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" {...register( "name" )} value={user.displayName} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Image Link
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" {...register( "img" )} value={user.photoURL} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Review</Form.Label>
                    <Col sm="10">
                        <Form.Control as="textarea" rows={3} {...register( "rev" )} placeholder="Write your review here." />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Address
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" {...register( "add" )} placeholder="Your Address Here" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Rating
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="number" max="5" min="1" {...register( "rating" )} placeholder="rate us 1~5" />
                    </Col>
                </Form.Group>
                <p className="text-danger">Please Click all input filed for confirm your order.</p>
                <ButtonGroup className="mb-2">
                    <Button type="submit" className="btn btn-warning">Add a Review</Button>
                </ButtonGroup>
            </Form>
        </Container>
    );
};

export default Review;