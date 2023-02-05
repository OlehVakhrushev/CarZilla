import React from "react";
import {Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Photos from "./Photos";
const Main = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/photos" element={<Photos />} />
            </Routes>
    );
};

export default Main;
