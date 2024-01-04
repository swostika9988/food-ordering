import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assests/menu/hi.jpg";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
              Burgers are iconic, aren't they? These delicious sandwiches typically consist of a cooked patty made from ground meat (commonly beef), placed between slices of a bun. They're often accompanied by various toppings like lettuce, tomatoes, onions, cheese, pickles, and sauces, creating a flavorful and satisfying meal.
              </p>
              <ul>
                <li>
                  <p>
                  The patty in a burger is usually made from meat, which is a great source of protein. Proteins are essential for building and repairing tissues in the body.
                  </p>
                </li>
                <li>
                  <p> Burgers can incorporate various vegetables and condiments, offering a mix of nutrients. Adding lettuce, tomatoes, onions, and even avocado can contribute vitamins, minerals, and dietary fiber to the meal.</p>
                </li>
                <li>
                  <p>
                  The carbohydrates in the bun provide energy, helping to fuel your body and keep you going throughout the day.
                  </p>
                </li>
                <li>
                  <p>
                  Food isn't just about nutrients; it's also about pleasure and enjoyment. Eating a burger you love can boost your mood and provide a sense of satisfaction.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

     
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
