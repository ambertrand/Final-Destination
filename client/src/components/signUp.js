import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';




function SignUp() {
    return (
        <div>

            <Row className="justify-content-center">
                <Col sm="auto">
                    <Button variant="primary">Sign Up</Button>{' '}
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://i.pinimg.com/originals/d7/dd/94/d7dd9454070b491daa5dc6b38fb679f5.jpg" alt="Logo" width="200" height="200" rounded />
                </Col>
                <Col sm="auto">
                    <Button variant="primary">Sign In</Button>{' '}
                </Col>
            </Row>

        </div>
    )
}

export default SignUp;
