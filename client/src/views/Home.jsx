import React, { useContext, useEffect, useState } from 'react';
import userContext from '../components/form/userContext'
import JumboSection from '../components/jumbotron/Jumbotron';
import HomeButtons from '../components/homeComponents/homeButtons';
import context from './../components/providers/userProfileProvider/context';
import getUserInfo from '../components/form/getUserInfo';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function Home(props) {
    // const {setUserProfile} = useContext(context);
    // const { user, isAuthenticated } = useAuth0();

    // useEffect(() => {
    //     if (isAuthenticated) {

    //         console.log(user);
    //         axios.post("/api/users/onAuthenticated", user)
    //             .then(function (response) {
    //                 // console.log(response);
    //                 // setUserProfile(response);
    //                 props.getUserId(response.data[0].id);
    //                 return getUserInfo(response.data[0].id);
    //             }).then(function(response){
    //                 console.log(response);
    //                 console.log("new response above");
    //                 setUserProfile(response.data)
    //             })

    //     }
    // }, [isAuthenticated, user]);

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