import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from "../components/navigation/Navbar";
import JumboSection from "../components/Jumbotron.jsx";


function Home() {
    return (
        <Container>

            <Navbar />

            <JumboSection
                title="Welcome to While You're There!"
                imageSrc="https://static.thenounproject.com/png/1700380-200.png"
                altText="shopping cart"
                imgClass="animate__animated animate__bounceInLeft"
            />
        </Container>


    )
}

export default Home;