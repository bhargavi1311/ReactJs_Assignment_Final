import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "bootstrap";
import { Button } from "bootstrap";
import "./index.css";
import Shopwith from "./Shopwith";
import Product from "./Product";
import Subscribe from "./Subscribe";
import Testinmonial from "./Testinmonial";
import Footer from "./Footer";
import Common from "./Common/Common";

const Home = () => {
  return (
    <>
      <div classname="container-fluid nav_bg">
        <div classname="row">
          <div className="col-13mx-auto">
            <div className="col-md-6 pt-lg-0 order-2 order-lg-1"></div>

            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                  <div className="backimg">
                    <div className="main"><h1 id="sale">Sale 20% Off</h1>
                    <h1 id="every"> On Everything</h1>
                    <p id="page">
                    <span>Explicabo esse amet tempora quibusdam laudantium, laborum<br/>
                      eaque magnam fugiat hic? Esse dicta aliquid error repudiandae<br/>
                      earum suscipit fugiat molestias, veniam, vel architecto veritatis<br/>
                      delectus repellat modi impedit sequi.</span>
                    </p>
                    <div><button type="button" class="btn btn-danger">Shop Now</button></div>
                  </div>
                  </div>
                </div>

                <div class="carousel-item" data-bs-interval="2000">
                <div className="backimg">
                    <div className="main1"><h1 id="sale">Sale 20% Off</h1>
                    <h1 id="every"> On Everything</h1>
                    <p id="page">
                    <span>Explicabo esse amet tempora quibusdam laudantium, laborum<br/>
                      eaque magnam fugiat hic? Esse dicta aliquid error repudiandae<br/>
                      earum suscipit fugiat molestias, veniam, vel architecto veritatis<br/>
                      delectus repellat modi impedit sequi.
                    </span>
                    </p>
                    <div><button type="button" class="btn btn-danger">Shop Now</button></div>
                  </div>
                </div>
                </div>

                <div class="carousel-item" data-bs-interval="2000">
                <div className="backimg">
                    <div className="main2"><h1 id="sale">Sale 20% Off</h1></div>
                    <h1 id="every"> On Everything</h1>
                    <p id="page">
                    <span>Explicabo esse amet tempora quibusdam laudantium, laborum<br/>
                      eaque magnam fugiat hic? Esse dicta aliquid error repudiandae<br/>
                      earum suscipit fugiat molestias, veniam, vel architecto veritatis<br/>
                      delectus repellat modi impedit sequi.</span>
                    </p>
                    <div><button type="button" class="btn btn-danger">Shop Now</button></div>
                  </div>
              </div>
              </div>
              
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Shopwith/>
      <Product/>
      <Subscribe/>
      <Testinmonial/>
      <Footer/>
    </>
  );
};

export default Home;