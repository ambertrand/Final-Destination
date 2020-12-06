import React from 'react';
import axios from 'axios';
// import userContext from '../components/form/userContext'
import JumboSection from '../components/jumbotron/Jumbotron';
import HomeButtons from '../components/homeComponents/homeButtons';
// import context from './../components/providers/userProfileProvider/context';
// import getUserInfo from '../components/form/getUserInfo';
import { useAuth0 } from '@auth0/auth0-react';

function Home({ history }) {
    const { isAuthenticated } = useAuth0();
    React.useEffect(() => {
        console.log(isAuthenticated);
        if (!isAuthenticated) {
            history.push("/")
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
            <HomeButtons />
        </>
    )
}

export default Home;