import React, { useEffect, useState } from "react";
import JumboSection from "../components/jumbotron/Jumbotron.jsx";
import AboutUs from "../components/aboutComponents/aboutUs";
// import SignUp from "../components/signUp.js";

function LandingPage() {
    return (
        <div>
            <JumboSection
                title="Welcome to While You're There!"
                imageSrc="https://static.thenounproject.com/png/1700380-200.png"
                altText="shopping cart"
                imgClass="animate__animated animate__bounceInLeft"
            />

            <AboutUs />

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


        </div>

    )
}

export default LandingPage;