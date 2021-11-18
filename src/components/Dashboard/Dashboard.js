// import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import './Header.css'; // header css 

const Dashboard = () => {
    const { user } = useAuth();
    const [ users, setUsers ] = useState( {} );

    const { admin, displayName } = users[ 0 ] || {};

    useEffect( () => {
        fetch( `https://sheltered-chamber-51938.herokuapp.com/user/${user.email}` )
            .then( res => res.json() )
            .then( result => setUsers( result ) )
    }, [] );

    return (

        <><div className="fw-bolder text-center p-5 m-5 ">
            <h1 className="fs-1 text-warning">DASHBOARD</h1>
            <p>Name: {user.displayName} ---- You are {admin} {displayName}</p>
        </div>
            {/* // navbar start here */}
            <Navbar bg="white" variant="light" className="p-4" expand="md">
                <Container>
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="d-md-flex justify-content-md-end">
                            {/* Website main manu  */}
                            <Nav className="d-flex justify-content-end">


                                <Nav.Link>
                                    {displayName && <NavLink to="/myorders" className="btn">My Order</NavLink>}
                                </Nav.Link>
                                <Nav.Link>
                                    {admin && <NavLink to="/manageorders" className="btn">Manage all Order</NavLink>}
                                </Nav.Link>
                                <Nav.Link>
                                    {admin && <NavLink to="/addservices" className="btn" activeClassName="btn-light">Add a Product</NavLink>}
                                </Nav.Link>
                                <Nav.Link>
                                    {displayName && <NavLink to="/pay" className="btn" activeClassName="btn-light">Pay</NavLink>}
                                </Nav.Link>
                                <Nav.Link>
                                    {admin && <NavLink to="/makeadmin" className="btn" activeClassName="btn-light">Make Admin</NavLink>}
                                </Nav.Link>
                                <Nav.Link>
                                    {displayName && <NavLink to="/review" className="btn" activeClassName="btn-light">Review</NavLink>}
                                </Nav.Link>
                                <Nav.Link>
                                    {admin && <NavLink to="/manageproducts" className="btn" activeClassName="btn-light">Manage Products</NavLink>}
                                </Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Container>
            </Navbar></>
    );
};

export default Dashboard;