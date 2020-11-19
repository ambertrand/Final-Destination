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
                        <Card.Body> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien nunc, blandit eu aliquam ut, tincidunt eu ante. In hac habitasse platea dictumst. Maecenas vel interdum tortor. Cras suscipit nisi at turpis consequat pulvinar. Nulla massa dui, porttitor vel sodales quis, euismod ut nunc. Sed accumsan tempor eros. Donec fermentum porttitor ullamcorper. Morbi tempus placerat dui, at consectetur enim ultrices id.</Card.Body>
                    </Card>

                </Col>

            </Row>


        </div>
    )
}

export default AboutUs;
