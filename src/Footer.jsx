import React from "react";
import "./index.css";

const Footer = () => {
    return (
        <>
            <div class="foot">
                <footer class="page-footer font-small blue pt-4">
                    <div class="container-fluid text-center text-md-left">
                        <div class="row" >
                            <div class="col-md-2 mt-md-0 mt-5">
                                <img src={require("./images/logo.png")} alt="logo" height="50px" />
                                <p style={{ padding: "5px" }}><b>ADDRESS:</b> 28white tower,strret Name New york
                                    City,USA</p>
                                <p> <b>TELEPHONE:</b> +91 9876543210<br /></p>
                                <b>EMAIL:</b>Yourmain@gmail.com
                            </div>

                            <hr class="clearfix w-100 d-md-none pb-3" />
                            <div class="col-md-3 mb-md-0 mb-3">
                                <h5 class="text-uppercase">Links</h5>
                                <ul class="list-unstyled">
                                    <li>
                                        Home
                                    </li>
                                    <li>
                                        About
                                    </li>
                                    <li>
                                        Services
                                    </li>
                                    <li>
                                        Testimonial
                                    </li>
                                    <li>
                                        Blog
                                    </li>
                                    <li>
                                        Contact
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-3 mb-md-0 mb-3">
                                <h5 class="text-uppercase">ACCOUNT</h5>
                                <ul class="list-unstyled">
                                    <li>
                                        Account
                                    </li>
                                    <li>
                                        Checkout
                                    </li>
                                    <li>
                                        Login
                                    </li>
                                    <li>
                                        Register
                                    </li>
                                    <li>
                                        Shopping
                                    </li>
                                    <li>
                                        Widget
                                    </li>
                                </ul>
                            </div>

                            <div class="col-md-3 mb-md-0 mb-3">
                                <h5 class="text-uppercase">NEWSLETTER</h5>
                                <p style={{ padding: "5px" }}> Subscribe by our newsletter and get update protidin.</p>
                                <form action="">
                                    <input type="email" placeholder="Enter your email" />
                                    <button style={{ padding: "2px 2px 2px 2px", backgroundColor: " #f7444e", color: "white" }}>
                                        subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright text-center py-5 mb-10 " >
                        <div style={{ backgroundColor: "black", height: "80px", alignContent: "center" }}>
                            <p style={{ color: 'white', padding: "20px 20px 20px 20px", fontSize: "22px" }}>
                                © 2021 All Rights Reserved By <span style={{ color: '#f7444e', }}>Free Html Template </span>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;