import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



function Mission() {
    return (
        <div>
            <Row className="justify-content-center mb-4">
                <Col className="greyBox" xs={11} md={5}>
                    <h4 className="text-center"> Have you ever gone shopping for someone and forgot something? </h4>
                    <Card className="greyBox">
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
    )
}
export default Mission;