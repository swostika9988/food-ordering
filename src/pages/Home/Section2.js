import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pizza from "../../assests/about/pizza.png"
import Salad from "../../assests/about/Salad.png"
import Delivery from "../../assests/about/delivery.webp"



const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
 
];
function Section2() {
  return (
    <>
    <section className='about_section'>
        <Container>
            <Row>
               <Col lg={{ span:8, offset:2 }} className='text-center'>
                <h2>A burger is not just a food, it’s an emotion for the foodies.</h2>
                <p>
                Big Tasty Hamburger At times when we are in a hurry, hamburgers are one of the easiest foods to eat while on the go. No matter what time it is whether its breakfast, lunch, or dinner we grab a hamburger and might throw in some fries and a soda to go with it. 
                </p>
                <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
               </Col> 
            </Row>
        </Container>
    </section>
    <section className="about_wrapper">
    <Container>
      <Row className="justify-content-md-center">
        {mockData.map((cardData, index) => (
          <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
            <div className="about_box text-center">
              <div className="about_icon">
                <img
                  src={cardData.image}
                  className="img-fluid"
                  alt="icon"
                />
              </div>
              <h4>{cardData.title}</h4>
              <p>{cardData.paragraph}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
  </>
  );
}

export default Section2
