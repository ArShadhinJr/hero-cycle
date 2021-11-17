import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const DoctorList = ( props ) => {
    // destructuring for doctor 
    const { nameClass, img, cost, position: gender, _id, details } = props.product;

    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="text-center">
                        <Card.Title className="text-warning"><h2>{nameClass}</h2></Card.Title>
                        <Card.Text><b>{gender}</b></Card.Text>
                        <Card.Text>Price: <b>৳ {cost}</b></Card.Text>
                        <p className="fs-5 bg-gray border border-4 rounded"> {details}. Good services. Allah bless you. Good wishes for you. <br /></p>
                        <Link to={`/products/${_id}`}><p className="text-center"><Button variant="warning">Buy Now</Button></p></Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default DoctorList;