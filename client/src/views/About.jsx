import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function About() {
    return (
        <Container>
            <Row className="justify-content-center mb-4">

                <Col xs={11} md={4}  >
                    <Card>
                        <Card.Body>
                            <p>
                                Have you ever gone shopping for someone and forgot something? We definitely have! That is why
                                we created While You're There. Now with COVID-19, it is more important then ever to remember shopping items
                                in one trip to minimize the times we are in crowded stores and to help high risk individuals be able to request and
                                get all of their shopping needs.
                            </p>
                            <p>
                                The mission of While You're There is to empower users with the ability to communicate with others
                                such as significant others, roommates, familiy members, and friends to collaberate and create shopping lists in real time.
                                Especially now more then ever with Covid-19, we believe that While You're There can help family members
                                and friends who are at high risk for the virus. This gives them the control to make lists in real time
                                and communicate with others who are able to go out and retrieve everything they need to survive during this crisis.
                            </p>
                            <p>
                                We're he to save you time and hardache when it comes to running errands!
                            </p>
                        </Card.Body>
                    </Card>

                </Col>

            </Row>

        </Container>


    )
}

export default About;