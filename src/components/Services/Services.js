import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
    // use State to set services 
    const [ products, setProducts ] = useState( [] );
    //  Load Services data from services json file 
    useEffect( () => {
        fetch( 'http://localhost:5000/products' )
            .then( res => res.json() )
            .then( data => setProducts( data ) )
    }, [] );
    return (
        <>
            {/* Services Section main slogan  */}
            <div className="fw-bolder text-center p-5 m-5 mb-0 pb-0">
                <h1 className="fs-1 text-warning">OUR ALL PRODUCTS</h1>
                <p>HERO CYCLE / CHOICE YOUR ONE</p>
            </div>
            <Row xs={1} md={3} className="g-4 m-5  p-5">
                {/* map for show services  */}
                {
                    products.map( product => <Col>
                        <Card>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body className="text-center">
                                <Card.Title className="text-warning"><h2>{product.nameClass}</h2></Card.Title>
                                <Card.Text><b>{product.gender}</b></Card.Text>
                                <Card.Text>Price: <b>৳ {product.cost}</b></Card.Text>
                                <p className="fs-5 bg-gray border border-4 rounded"> {product.details}. Good services. Allah bless you. Good wishes for you. <br /></p>
                                <Link to={`/products/${product._id}`}><p className="text-center"><Button variant="warning">Buy Now</Button></p></Link>
                            </Card.Body>
                        </Card>
                    </Col> )
                }

            </Row>
        </>
    );
};

export default Services;