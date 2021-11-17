import React, { useEffect, useState } from 'react';
import { Badge, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousels from '../Carousel/Carousels';
import Contact from '../Contact/Contact';
import HappyCustomer from '../HappyCustomer/HappyCustomer';
import Marguee from '../Marquee/Marguee';
import ProductList from '../ProductList/ProductList';

function Home() {
    // useState from admition useEffect
    const [ products, setProducts ] = useState( [] );
    //  load data frm frist page for home page 
    useEffect( () => {
        fetch( 'http://localhost:5000/products' )
            .then( res => res.json() )
            .then( data => setProducts( data ) )
    }, [] );
    return (
        <>
            {/* use marguee  */}
            <Marguee></Marguee>
            {/* use Carousels  */}
            <Carousels></Carousels>
            <Container>
                <h1 className='mt-5 text-uppercase fw-bolder'>OUr products
                    <h5 className="d-inline-block text-uppercase align-text-top"><Badge bg="danger">hot</Badge></h5>
                </h1>
            </Container>
            {/* use Services for home page  */}
            <Row xs={1} md={3} className="g-4 m-5">
                {
                    products.slice( 0, 6 ).map( product => <ProductList
                        key={products._id}
                        product={product}
                    ></ProductList> )
                }

            </Row>
            <div className="text-center"><Link to="/products"><a className="btn mb-3 btn-warning btn-sm ">MORE PRODUCT</a></Link></div>
            <Contact></Contact>
            <Container>
                <h1 className='mt-5 text-uppercase fw-bolder'>happy customer review
                    <h5 className="d-inline-block text-uppercase align-text-top"><Badge bg="danger">new</Badge></h5>
                </h1>
            </Container>
            <HappyCustomer></HappyCustomer>
        </>
    )
}

export default Home
