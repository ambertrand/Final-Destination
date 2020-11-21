import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





function AboutUs() {
    return (
        <div>

            <Row className="justify-content-center mb-4">

                <Col xs={4} >
                    <Card>
                        <Card.Body>The Mission of While You're There is to empower users with the ability to communicate with others such as roommates, familiy members, and friends to collaberate and create shopping lists in real time. Especially now more then ever with Covid-19, we believe that While You're There can help family members and friends who are at high risk for the virus. This gives them the control to make lists in real time and communicate with others who are able to go out and retreave everything they need to survive during this crisis. We're he to save you time and hardache when it comes to running errands! </Card.Body>
                    </Card>

                </Col>

            </Row>


        </div>
    )
}

export default AboutUs;
