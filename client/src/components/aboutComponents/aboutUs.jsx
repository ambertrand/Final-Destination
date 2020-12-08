import React from "react";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import alex from '../../assets/Alex.png';
import nk from '../../assets/NK.png';
import matthew from '../../assets/Matthew.png';
import jfarms from '../../assets/jfarms.png';
import warren from '../../assets/warren.png';
import Dwayne from '../../assets/Dwayne.png';
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
                                <Card.Title>Alex Bertrand</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Card.Link href="https://github.com/ambertrand" target="_blank">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={["fab", "github"]} size='3x' color='black' />&nbsp;&nbsp;&nbsp;
                                 </Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/alex-bertrand/" target="_blank">
                                    <FontAwesomeIcon icon={["fab", "linkedin"]} size='3x' />
                                </Card.Link>
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
                                <Card.Link href="https://github.com/nkleinmann" target="_blank">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={["fab", "github"]} size='3x' color='black' />&nbsp;&nbsp;&nbsp;
                                 </Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/nicolekleinmann/" target="_blank">
                                    <FontAwesomeIcon icon={["fab", "linkedin"]} size='3x' />
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={matthew} />
                            <Card.Body>
                                <Card.Title>Matthew Bongiorno</Card.Title>
                                <Card.Text>
                                    Fun Fact: Knows how to use font awesome with React!
                                </Card.Text>
                                <Card.Link href="https://github.com/MattBongiorno" target="_blank">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={["fab", "github"]} size='3x' color='black' right="10px" />&nbsp;&nbsp;&nbsp;
                                 </Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/mattbongiorno/" target="_blank">
                                    <FontAwesomeIcon icon={["fab", "linkedin"]} size='3x' />
                                </Card.Link>
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
                                <Card.Link href="https://github.com/farmerj95" target="_blank">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={["fab", "github"]} size='3x' color='black' />&nbsp;&nbsp;&nbsp;
                                 </Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/jesse-farmer-39a392166/" target="_blank">
                                    <FontAwesomeIcon icon={["fab", "linkedin"]} size='3x' />
                                </Card.Link>
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
                                <Card.Link href="https://github.com/RisleyDwayne" target="_blank">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <FontAwesomeIcon icon={["fab", "github"]} size='3x' color='black' />&nbsp;&nbsp;&nbsp;
                                 </Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/mattbongiorno/" target="_blank">
                                    <FontAwesomeIcon icon={["fab", "linkedin"]} size='3x' />
                                </Card.Link>
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
                                <Card.Link href="https://github.com/wmhunt1" target="_blank">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={["fab", "github"]} size='3x' color='black' />&nbsp;&nbsp;&nbsp;
                                 </Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/matt-hunt-208076121/" target="_blank">
                                    <FontAwesomeIcon icon={["fab", "linkedin"]} size='3x' />
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>

            </Row>


        </div>
    )
}

export default AboutUs;
