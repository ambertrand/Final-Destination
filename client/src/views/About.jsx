import React from "react";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
import AboutUs from "../components/aboutComponents/aboutUs";
// import Carousel from "../components/aboutComponents/carousel";
import { useAuth0 } from '@auth0/auth0-react';

function About({history}) {
    const { isAuthenticated } = useAuth0();

    React.useEffect(() => {
        // console.log(isAuthenticated);
        if (!isAuthenticated) {
            history.push("/")
        }
    }, [isAuthenticated, history]);
    return (

        <>
            <AboutUs />

        </>
  
  )
}

export default About;