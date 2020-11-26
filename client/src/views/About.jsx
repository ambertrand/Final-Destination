import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


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
                        </Card.Body>
                    </Card>

                </Col>

            </Row>




        </Container>


    )
}

export default About;