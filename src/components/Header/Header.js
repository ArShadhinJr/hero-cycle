import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'; // header css 

const Header = () => {
    const { user, logOut } = useAuth();


    const { email, displayName } = user;

    return (
        // navbar start here 
        <Navbar bg="warning" variant="light" className="p-4" expand="md">
            <Container className="d-flex justify-content-between">
                <Container>

                    {/* website title main  */}
                    <Navbar.Brand href="/home" className="header-title fs-2 text-white">HERO CYCLE</Navbar.Brand>
                </Container>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="d-md-flex justify-content-md-end">
                        {/* Website main manu  */}
                        <Nav className="d-flex justify-content-end">
                            <Nav.Link>
                                <NavLink to="/home" className="btn" activeClassName="btn-light">Home</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to="/about" className="btn" activeClassName="btn-light">About</NavLink>
                            </Nav.Link>

                            <Nav.Link>
                                <NavLink to="/products" className="btn" activeClassName="btn-light">Explore Now</NavLink>
                            </Nav.Link>

                            <Nav.Link>
                                <NavLink to="/dashboard" className="btn" activeClassName="btn-light">Dashboard</NavLink>
                            </Nav.Link>

                            {/* <NavDropdown title="Dashboard" className="btn" activeClassName="btn-light">
                                <NavDropdown.Item> {general && <NavLink to="/myorders" className="btn">My Order</NavLink>}</NavDropdown.Item>
                                <NavDropdown.Item> {admin && <NavLink to="/manageorders" className="btn">Manage all Order</NavLink>}</NavDropdown.Item>
                                <NavDropdown.Item> {admin && <NavLink to="/addservices" className="btn" activeClassName="btn-light">Add a Product</NavLink>}</NavDropdown.Item>
                                <NavDropdown.Item> {general && <NavLink to="/pay" className="btn" activeClassName="btn-light">Pay</NavLink>}</NavDropdown.Item>
                                <NavDropdown.Item> {admin && <NavLink to="/makeadmin" className="btn" activeClassName="btn-light">Make Admin</NavLink>}</NavDropdown.Item>
                                <NavDropdown.Item> {general && <NavLink to="/review" className="btn" activeClassName="btn-light">Review</NavLink>}</NavDropdown.Item>
                                <NavDropdown.Item> {admin && <NavLink to="/manageproducts" className="btn" activeClassName="btn-light">Manage Products</NavLink>}</NavDropdown.Item>
                            </NavDropdown> */}


                            <Nav.Link>
                                {/* {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>} */}
                                {email && <small>{displayName}</small>}
                            </Nav.Link>
                            <Nav.Link>
                                {email ? <Button onClick={logOut} className="btn btn-light">Log Out</Button> : <NavLink to="/login" className="btn" activeClassName="btn-light">Login</NavLink>}
                            </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Container>
        </Navbar>
    );
};

export default Header;