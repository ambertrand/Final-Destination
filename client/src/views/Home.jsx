import React, { useEffect } from 'react';
import JumboSection from '../components/jumbotron/Jumbotron';
import HomeButtons from '../components/homeComponents/homeButtons';
import { useAuth0 }  from '@auth0/auth0-react';
import axios from 'axios';

function Home() {

    const {user, isAuthenticated} = useAuth0();

    useEffect(() => {
        if(isAuthenticated){

            console.log(user);
            axios.post("/api/users/onAuthenticated", user);

        }
    }, [isAuthenticated, user]);

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