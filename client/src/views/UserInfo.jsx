import React, { useEffect, useState } from "react";
import JumboSection from "../components/jumbotron/Jumbotron.jsx";
import UserForm from "../components/form/UserForm.jsx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UserInfo() {
    return (
        <div >
            <JumboSection
                title="While You're There"
                imageSrc="https://static.thenounproject.com/png/1700380-200.png"
                altText="shopping cart"
            />
            <Row >
                <Col sm="12">
                    <UserForm />
                </Col> 
            </Row>

        </div>
    )
}

export default UserInfo;