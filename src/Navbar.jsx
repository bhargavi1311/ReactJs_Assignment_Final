import React from "react";
import { Navbar, Container, NavDropdown, Nav, img } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import "./index.css";

const Navbars = () => {
    return (
        <>
            <div classname="container-fluid nav_bg-white py-3 shadow-sm ">
                <div classname="row">
                    <div className="col-10 mx-auto">
                        <Navbar bg="#ffff" expand="lg">
                            <Container fluid>
                                <div className="logo"><img src={require("./images/logo.png")} alt="logo" height="50px" /></div>
                                <Navbar.Brand href="#">
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto  fw-bold fs-4 my-2 my-lg-2"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll >

                                        <Nav.Link className="nav_link "> <Link to="/">HOME</Link> </Nav.Link>
                                        <NavDropdown title="PAGES" id="navbarScrollingDropdown">
                                            <NavDropdown.Item className="nav_link"><Link to ="/About">About</Link></NavDropdown.Item>
                                            <NavDropdown.Item className="nav_link"><Link to ="/Testimonial">Testimonial</Link></NavDropdown.Item>
                                        </NavDropdown>

                                        <Nav.Link><Link to="/Product">PRODUCT</Link></Nav.Link>   
                                        <Nav.Link><Link to ="/Blog">Blog</Link> </Nav.Link>                                        
                                        <Nav.Link><Link to="/Contact">Contact</Link></Nav.Link>
                                        <Nav.Link> <Link to ="/Cart"><BsFillCartFill size={"20px"}></BsFillCartFill></Link></Nav.Link>
                                        <Nav.Link><BiSearch size={"20px"}></BiSearch></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Navbars;