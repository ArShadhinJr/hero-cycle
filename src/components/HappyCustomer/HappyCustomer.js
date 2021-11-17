import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const HappyCustomer = () => {
    // use State to set services 
    const [ reviews, setReviews ] = useState( [] );
    //  Load Services data from services json file 
    useEffect( () => {
        fetch( 'http://localhost:5000/reviews' )
            .then( res => res.json() )
            .then( data => setReviews( data ) )
    }, [] );


    return (
        <Row xs={1} md={3} className="g-4 m-5 mt-0  p-5 pt-3">
            {/* map for show services  */}
            {
                reviews.map( review => <><Col>
                    <Card>
                        <Card.Img variant="top" className="rounded rounded-circle" src={review.img} />
                        <Card.Body>
                            <Card.Title><h2 className="text-danger">{review.name}</h2></Card.Title>
                            <h3><Card.Text className="text-justify ">{review.add}</Card.Text></h3>
                            <Card.Text className="text-justify ">Mr/Ms, {review.name} says: <b>{review.rev}</b></Card.Text>
                            <p className="text-center"><Button className="btn btn-warning" variant="warning">Call {review.name}</Button></p>
                        </Card.Body>
                    </Card>
                </Col></> )
            }

        </Row>
    );
};

export default HappyCustomer;