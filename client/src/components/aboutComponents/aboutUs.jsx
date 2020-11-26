import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from "react-bootstrap/Carousel";

function AboutUs() {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )}

        
        <div>

            <Row className="justify-content-center mb-4">

                <Col xs={11} md={5}>
                    <h4 className="text-center"> Have you ever gone shopping for someone and forgot something? </h4>
                    <Card className="bg-light">
                        <Card.Body className="text-center">
                            <p>
                            We definitely have! That is why 
                            we created While You're There. Now with COVID-19 it is more important then ever to remember shopping items 
                            in one trip. This helps high risk individuals be able to request and receive all of their shopping needs 
                            and minimizes the times the shopper is in crowded stores. 
                            We're here to save you time and heartache when it comes to running errands!
                            </p>
                            </Card.Body>
                    </Card>

                </Col>

            </Row>


        </div>


export default AboutUs;
