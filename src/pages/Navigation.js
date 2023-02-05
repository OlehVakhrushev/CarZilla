import React from "react";
import logo from '../logo/logo.jpg'
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <NavbarBrand href="/">
                        <img src={logo}
                             height="50"
                             width="60"
                             className="d-inline-block- align-top"
                             alt="Logo"/>
                    </NavbarBrand>

                    <NavbarToggle area-controls="responsive-navbar-nav"/>
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
                            <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
                            <Link to="/contacts" style={{ marginRight: '10px' }}>Contacts</Link>
                            <Link to="/photos">Photos</Link>
                        </Nav>
                        <Form inline="true" className="d-flex align-items-center">
                            <FormControl
                                inline="true"
                                type="text"
                                className="me-sm-2"
                            />
                            <Button variant="outline-info" className="ml-auto">Search</Button>
                        </Form>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </>
    );
}
export default Navigation;