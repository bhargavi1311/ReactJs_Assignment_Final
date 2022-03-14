import React from 'react';
import "../About/../App.css";
import '../App.css';

export const Arrival = () => {
  return (
    <div className='arrivals'>
                    <div classname="container-fluid nav_bg">
                        <div classname="row">
                            <div className="col-10 mx-auto ml-10">
                                <h1 id='arvh1'>#New Arrivals</h1>
                            </div>
                            <div>
                                <p id ="p1">
                                <span>
                                Vitae fugiat laboriosam officia perferendis provident aliquid <br/></span> 
                               <span> voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? <br/>
                               <span> Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem <br/>
                                similique ex unde! 
                                </span></span>
                            </p>
                            </div>
                            <div><button className='shopnow' type="button">Shop Now</button></div> 
                            {/* <div><button type="button" class="btn btn-danger" style={margin-left: '850px'}>Shop Now</button></div>   */}
                        </div>
                    </div>
                </div>
            
  );
};

export default Arrival;
