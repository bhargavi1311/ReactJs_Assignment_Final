import React from "react";
import "./index.css";
import { Carousel } from 'react-bootstrap';

const Testinmonial = () => {
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center", marginTop: "70px", color: "Black", fontSize: "60px" }}> Customer's Testimonial</h1>
      <div className=''>
        <Carousel variant="dark" className='w'>
          <Carousel.Item>
            <img
              style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "100%", padding: "150px", margin: " 50px 50px 50px 50px" }}
              className="d-block w-2"
              src={require("./images/client.jpg")}
              alt="First slide"
            />
            <Carousel.Caption >
              <h5>Anna Trevor</h5>
              <span>
                <p>Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et,
                  perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium
                  sapiente nam! Quaerat.</p>
              </span>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "90%", padding: "150px", margin: " 50px 50px 50px 50px" }}
              className="d-block w-2"
              src={require("./images/client.jpg")}
              alt="Second slide"/>
            <Carousel.Caption>
              <h5>Anna Trevor</h5>
              <span>
                <p>Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et,
                  perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium
                  sapiente nam! Quaerat.</p>
              </span>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ display: "flex", justifyContent: "center", borderRadius: "90%", padding: "150px", margin: " 50px 50px 50px 50px" }}
              className="d-block w-2"
              src={require("./images/client.jpg")}
              alt="Third slide" />

            <Carousel.Caption>
              <h5>Anna Trevor</h5>
              <span>
                <p>Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et,
                  perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium
                  sapiente nam! Quaerat.</p>
              </span>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
    </>
  );
};

export default Testinmonial;