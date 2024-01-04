import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Image1 from "../../assests/menu/crispy.jpg"
import Image2 from "../../assests/menu/bacon.gif"
import Image3 from "../../assests/menu/black.jpg"
import Image4 from "../../assests/menu/vegan.jpg"
import Image5 from "../../assests/menu/double.gif"
import Image6 from "../../assests/menu/turkey.jpeg"
import Image7 from "../../assests/menu/smokey.gif"
import Image8 from "../../assests/menu/classic.jpg"
import Cards from "../../components/Layouts/Cards"


const mockData = [
    {
      id: "0001",
      image: Image1,
      title: "Crispy chicken",
      paragraph: " chicken,dry yeast, warm water, onion, tomato, capsicum, cheese",
      rating: 5,
      price: 400,
    },
    {
      id: "0002",
      image: Image2,
      title: "Ultimate Bacon",
      paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
      rating: 4.5,
      price: 300,
    },
    {
      id: "0003",
      image: Image3,
      title: "Black Sheep",
      paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
      rating: 4,
      price: 320,
    },
    {
      id: "0004",
      image: Image4,
      title: "Vegan Burger",
      paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
      rating: 3.5,
      price: 280,
    },
    {
      id: "0005",
      image: Image5,
      title: "Double Burger",
      paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
      rating: 3.0,
      price: 310,
    },
    {
      id: "0006",
      image: Image6,
      title: "Turkey Burger",
      paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
      rating: 3,
      price: 290,
    },
    {
      id: "0007",
      image: Image7,
      title: "Smokey House",
      paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
      rating: 2.5,
      price: 380,
    },
    {
      id: "0008",
      image: Image8,
      title: "classic burger",
      paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
      rating: 2.0,
      price: 250,
    },
   
  ];
  
  
  const renderRatingIcons = (rating) => {
    const stars = [];
  
    for (let i = 0; i < 5; i++) {
      if (rating > 0.5) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
        rating--;
      } else if (rating > 0 && rating < 1) {
        stars.push(<i key={"half"} className="bi bi-star-half"></i>);
        rating--;
      } else {
        stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
      }
    }
    return stars;
  };
  
function Section3() {
  return (
    <>
    <section className='menu_section'>
        <Container>
            <Row>
                <Col lg={{ span: 8, offset:2 }}>
                    <h2>OUR CRAZY BURGERS</h2>
                    <p>
                    A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world.
                    </p>
                </Col>
            </Row>
            <Row>
            {mockData.map((cardData, index) => (
            <Cards
              key={index}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
            />
          ))}


        </Row>
        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
          </Row>
        </Container>
    </section>
      
    </>
  );
}

export default Section3
