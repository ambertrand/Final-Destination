import React from "react";
import UserForm from "../components/form/UserForm.jsx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// import { useAuth0 } from "@auth0/auth0-react";


function UserInfo({history}) {

    // const { isAuthenticated } = useAuth0();

    // React.useEffect(() => {
    //     // console.log(isAuthenticated);
    //     if (!isAuthenticated) {
    //         history.push("/")
    //     }
    //     //  eslint-disable-next-line 
    // }, [isAuthenticated]);

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