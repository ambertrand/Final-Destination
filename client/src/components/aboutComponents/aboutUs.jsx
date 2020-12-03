import React from "react";
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import alex from '../../assets/Alex.png';
import nk from '../../assets/NK.png';
import matthew from '../../assets/Matthew.png';
import jfarms from '../../assets/jfarms.png';
import { First } from "react-bootstrap/esm/PageItem";


function AboutUs() {
    return (
        <div>

            <Row className="justify-content-center mb-4">

                <Carousel>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={alex} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={nk} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{ width: 500, height: 'auto' }} variant="top" src={matthew} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={jfarms} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={jfarms} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=""
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </Row>


        </div>
    )
}

export default AboutUs;
