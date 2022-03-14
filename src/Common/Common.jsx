import React from "react";
import { Card, CardGroup } from 'react-bootstrap';
import { FaShippingFast } from 'react-icons/fa';
import { BsFillGiftFill } from 'react-icons/bs';
import { MdDeliveryDining } from 'react-icons/md';
import "../About/../App.css";
import '../App.css';

const Common = () => {
    return (
        <>
            <div classname="container-fluid nav_bg">
                <div classname="row">
                    <div className="col-10 mx-auto">
                        <h1 id='shopus'> Why Shop With Us</h1>
                    </div>
                </div>
            </div>

            <div>
                <CardGroup>
                    <Card className='mycard'>
                        <div>
                            <MdDeliveryDining size={"120px"}></MdDeliveryDining>
                        </div>
                        <Card.Body className='mycard'>
                            <Card.Title>Fast Delivery</Card.Title>
                            <Card.Text>
                                Variation of passages of Lorem lpsum available
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='mycard'>
                        <div>
                            <BsFillGiftFill size={"150px"}></BsFillGiftFill>
                        </div>
                        <Card.Body >
                            <Card.Title>Free Shiping</Card.Title>
                            <Card.Text>
                                Variation of passages of Lorem lpsum available
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='mycard'>
                        <div>
                            <FaShippingFast size={"120px"}></FaShippingFast>
                        </div>
                        <Card.Body className='mycard'>
                            <Card.Title>Best Quality</Card.Title>
                            <Card.Text>
                                Variation of passages of Lorem lpsum available
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </>
    );
};

export default Common;


