import React from 'react';
import JumboSection from '../components/jumbotron/Jumbotron';
import HomeButtons from '../components/homeComponents/homeButtons';


function Home() {
    return (
        <>
            <JumboSection
                title="Welcome to While You're There!"
                imageSrc="https://static.thenounproject.com/png/1700380-200.png"
                altText="shopping cart"
                imgClass="animate__animated animate__bounceInLeft"
            />

            <HomeButtons />
        </>
    )
}

export default Home;