import React from "react";
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import alex from '../../assets/Alex.png';
import nk from '../../assets/NK.png';
import matthew from '../../assets/Matthew.png';
import jfarms from '../../assets/jfarms.png';
import warren from '../../assets/warren.png';
import Dwayne from '../../assets/Dwayne.png';
import { First } from "react-bootstrap/esm/PageItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function AboutUs() {
    return (
        <div className="carouselPad">

            <Row className="justify-content-center mb-4">

                <Carousel>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={alex} />
                            <Card.Body>
                                <Card.Title>Alex Kleinmann</Card.Title>
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
                                <Card.Title>Nicole Kleinmann</Card.Title>
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
                                <Card.Title>Matthew Bongiorno</Card.Title>

                                <a href="https://www.google.com/">

                                    <FontAwesomeIcon icon={['fab', 'FaLinkedin']} />

                                </a>
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
                                <Card.Title>Jesse Farmer</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Dwayne} />
                            <Card.Body>
                                <Card.Title>Dwayne Risley</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={warren} />
                            <Card.Body>
                                <Card.Title>Warren Hunt</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>

            </Row>


        </div>
    )
}

export default AboutUs;
