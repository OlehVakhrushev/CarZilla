import React from "react";
import logo from '../logo/logo.jpg'
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import About from "./About";
import Contacts from "./Contacts";
import Photos from "./Photos";
import Home from "./Home";

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
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/about">About</NavLink>
                            <NavLink href="/contacts">Contacts</NavLink>
                            <NavLink href="/photos">Photos</NavLink>
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
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contacts" element={<Contacts />}/>
                <Route path="/photos" element={<Photos />}/>

            </Routes>

        </>
    );
}
export default Navigation;