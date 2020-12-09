import React from "react";
import JumboSection from "../components/jumbotron/Jumbotron.jsx";
import Mission from "../components/landingComponents/missionstatement";
import { useAuth0 } from '@auth0/auth0-react';

function LandingPage({ history }) {

    const { isAuthenticated } = useAuth0();

    React.useEffect(() => {
        // console.log(isAuthenticated);
        if (isAuthenticated) {
            history.push("/home");
        }
        else {
            history.push("/")
        }
    }, [isAuthenticated]);



    return (
        <>
            <JumboSection
                title="Welcome to While You're There!"
                imageSrc="https://static.thenounproject.com/png/1700380-200.png"
                altText="shopping cart"
                imgClass="animate__animated animate__bounceInLeft"
            />

            <Mission />

        </>

    )
}

export default LandingPage;