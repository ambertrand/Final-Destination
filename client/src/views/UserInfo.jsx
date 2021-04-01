import React from "react";
import UserForm from "../components/form/UserForm.jsx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function UserInfo({history}) {
    return (
        <Container>
            <Row >
                <Col sm="12">
                    <UserForm />
                </Col> 
            </Row>
        </Container>
    )
}

export default UserInfo;