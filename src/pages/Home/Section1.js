import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Burger from "../../assests/hero/burger.png"
import { Link } from 'react-router-dom'

function Section1() {
  return (
    <section className="hero_section">
        <Container>
            <Row>
                <Col lg={7} className='mb-5 mb-lg-0'>
                    <div className='position-relative'>
                        <img src={Burger} className='img-fluid' alt='Hero' />
                        <div className='price_badge'>
                            <div className='badge_text'>
                                <h4 className='h4_xs'>
                                Only
                                </h4>
                                <h4 className='h3_lg'>
                                Rs.210
                                </h4>

                            </div>

                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className='hero_text text-center'>
                        <h1 className='text-white'>New Burger

                        </h1>
                        <h2 className='text-white'>With Onion</h2>
                        <p className='text-white pt-2 pb-4'>
                        Burgers are a culinary delight that marries simplicity with incredible flavors. A perfectly grilled patty, nestled between two soft buns, creates a canvas for an array of toppings and condiments that cater to diverse tastes. The juicy, savory essence of the meat, whether beef, chicken, or plant-based, harmonizes with the crisp freshness of lettuce, the tang of pickles, the creaminess of cheese, and the richness of sauces like ketchup or mayo. Each bite is a symphony of textures and tastes, making the humble burger a timeless favorite enjoyed by people worldwide.
                        </p>
                        <Link to="/" className='btn order_now'>Order Now</Link>
                    </div>
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Section1
