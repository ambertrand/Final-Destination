import React from "react";
import Container from 'react-bootstrap/Container';
import JumboSection from "../components/jumbotron/Jumbotron.jsx";


function Home() {
    return (
        <Container>
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