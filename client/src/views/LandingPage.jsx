import React from "react";
import JumboSection from "../components/jumbotron/Jumbotron.jsx";
import AboutUs from "../components/aboutComponents/aboutUs";
import { useAuth0 } from '@auth0/auth0-react';

function LandingPage({ history }) {

    const { isAuthenticated } = useAuth0();

    React.useEffect(() => {
        console.log(isAuthenticated);
        if(isAuthenticated){
            history.push("/home");
        }
    }, [isAuthenticated, history]);

    return (
        <>
            <JumboSection
                title="Welcome to While You're There!"
                imageSrc="https://static.thenounproject.com/png/1700380-200.png"
                altText="shopping cart"
                imgClass="animate__animated animate__bounceInLeft"
            />

            <AboutUs />

{/* Jesse, your code from sign up component is below. Create a new jsx file in homeComponents folder */}
            {/* <Row className="justify-content-center">
                <Col sm="auto">

                </Col>
                <Col sm="auto">
                    <Image src="https://i.dlpng.com/static/png/6959392_preview.png" alt="Logo" width="200" height="200" rounded />
                </Col>
                <Col sm="auto">

                </Col>
            </Row> */}

            {/* <SignUp /> */}


        </>

    )
}

export default LandingPage;