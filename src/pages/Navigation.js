import React from "react";
import logo from '../logo/logo.jpg'
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {Link, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Photos from "./Photos";
import Repair from "../repair/Repair";
import SiteName from "../SiteName";

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <NavbarBrand href="/">
                        <SiteName className='site-name' />
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
                            <Link to="/photos"  style={{ marginRight: '10px' }}>Photos</Link>
                            <Link to="/repair" >Repair Shop</Link>
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="/repair" element={<Repair />} />
            </Routes>
        </>
    );
}
export default Navigation;


