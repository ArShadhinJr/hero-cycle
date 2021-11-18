import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Carousels = () => {
    // set carouseles for useEffect
    const [ carouseles, setCarouseles ] = useState( [] );
    // load data from carousels.json file 
    useEffect( () => {
        fetch( 'https://sheltered-chamber-51938.herokuapp.com/carusel' )
            .then( res => res.json() )
            .then( data => setCarouseles( data ) )
    }, [] );


    return (
        <Carousel variant="light">
            {/* carousele map */}
            {
                carouseles.map( carousele =>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousele.imgLink}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className="text-warning fw-bolder">{carousele.imgSlug}</h2>
                            <><Link to="/products"><a className="btn btn-warning btn-sm ">EXPLORE NOW</a></Link></>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        </Carousel>
    );
};

export default Carousels;