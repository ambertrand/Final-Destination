import React from "react";
// import JumboSection from "../components/jumbotron/Jumbotron.jsx";
import UserForm from "../components/form/UserForm.jsx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useAuth0 } from '@auth0/auth0-react';

function UserInfo({history}) {

    const { isAuthenticated } = useAuth0();

    React.useEffect(() => {
        // console.log(isAuthenticated);
        if (!isAuthenticated) {
            history.push("/")
        }
    }, [isAuthenticated, history]);

    return (
        <Container>
            {/* <JumboSection
                title="While You're There"
                imageSrc="https://static.thenounproject.com/png/1700380-200.png"
                altText="shopping cart"
            /> */}
            <Row >
                <Col sm="12">
                    <UserForm />
                </Col> 
            </Row>

        </Container>
    )
}

export default UserInfo;