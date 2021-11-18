import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProducts = () => {
    // return (
    //     <div className="fw-bolder text-center p-5 m-5 mb-0 pb-0">
    //         <h1 className="fs-1 text-warning">MANAGE PRODUCTS</h1>
    //         <p>HERO CYCLE / MANAGE YOUR ALL PRODUCTS</p>
    //         <br /><br />

    //     </div>
    // );

    const [ products, setProducts ] = useState( [] );
    const [ control, setControl ] = useState( false );

    useEffect( () => {
        fetch( `https://sheltered-chamber-51938.herokuapp.com/products` )
            .then( res => res.json() )
            .then( data => setProducts( data ) )
    }, [ control ] );

    const handleDelete = ( id ) => {
        fetch( `https://sheltered-chamber-51938.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE",
        } )
            .then( ( res ) => res.json() )
            .then( ( data ) => {
                if ( data.deletedCount ) {
                    setControl( !control );
                }
            } );
        console.log( id );
    };


    return (
        <>
            {/* orders Section main slogan  */}
            <div className="fw-bolder text-center p-5 m-5 mb-0 pb-0">
                <h1 className="fs-1 text-warning">MANAGE ALL SERVICES</h1>
                <p>HELEX DELIVERY / MANAGE ALL ORDERS</p>
                <br /><br />
            </div>

            <div>
                <div className="container">
                    <h1>Manage Services </h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Product ID</th>
                                <th>Details</th>
                                <th>Gender</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {products?.map( ( product, index ) => (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{product.nameClass}</td>
                                    <td>{product._id}</td>
                                    <td>{product.details}</td>
                                    <td>{product.gender}</td>
                                    <td>{product.cost}</td>
                                    <button onClick={() => handleDelete( product._id )} className="btn bg-danger p-2">Delete</button>
                                </tr>
                            </tbody>
                        ) )}
                    </Table>
                </div>
            </div>
        </>
    );


};

export default ManageProducts;