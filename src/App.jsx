import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home  from "./Home";
import { Route, Routes } from "react-router-dom";
import Navbars from "./Navbar";
import Blog from "./Blog/Blog";
import Product1 from "./Product/Product1";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Testinoal from "./Testnional/Testinoal";
import Cart from "./Cart";

function App() {
  return (
    <>      
       <Navbars/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Testimonial" element={<Testinoal/>}/>
        <Route path="/Product" element={<Product1/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
  
    </>
  );
}

export default App;