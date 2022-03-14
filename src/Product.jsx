import React, { useState } from "react";
import './index.css';
import Menu from "./Menu";

const Product = () => {

   const [items, setItems] = useState(Menu)

   return (
      <>
         <div classname="container-fluid nav_bg">
            <div classname="row">
               <div className="col-10 mx-auto">
                  <h1 id="product" style={{ color: 'black', textAlign: 'center', marginTop: "50px" }}>Our <span style={{ color: '#f7444e' }}>Products</span> </h1>
               </div>
            </div>
            <div className="menu-items container-fluid mt-5">
               <div className="row">
                  <div className="col-11 mx-auto" >
                     <div className="row my-5">
                        {
                           items.map((elem) => {
                              const { id, images, name, title, price } = elem;
                              return (
                                 <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                                    <div>
                                       <img src={images} alt={name} className="img-fluid" />
                                    </div>
                                    <div className="menuprice">
                                       <div className="pricedivide">
                                          <h2>{title}</h2>
                                          <h2>{price}</h2>
                                          <a href="#">
                                             <button className="btn btn-primary">Add to cart</button>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              )
                           })
                        }
                        <div className='col-md-10 text-center'>
                           <button type="button" class="allproducts" style={{ fontSize: "20px", padding: "10px 50px", backgroundColor: "#f7444e", color: 'white' }}>View All Products</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </>
   );
};

export default Product;