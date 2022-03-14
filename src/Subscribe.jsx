import React from "react";
import "./index.css";

const Subscribe = ()=> {
    return(
                <div className="sub1"  style={{background: "#d4ced0", paddingTop:"100px 45px" }}>
                  <div class="col-md-6 offset-md-3" >
                     <div class="subscribe_form ">
                        <div class="heading_container heading_center" style={{marginTop:"100px"}}>
                           <h1 style={{padding:"150px" , color: "#002c3e",fontSize:"40px"}}>Subscribe To Get Discount Offers</h1>
                           <p style={{margin :"-30px",padding:"auto",fontSize:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                           <form action="">
                           <input type="email" placeholder="Enter your email"/>
                           <button style={{padding:"2px 2px 2px 2px" ,backgroundColor:" #f7444e",color:"white"}}>
                           subscribe
                           </button>
                        </form>
                        </div>         
                     </div>
                  </div>
                  </div>
    );
  };

  export default Subscribe;