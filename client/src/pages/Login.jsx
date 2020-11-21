import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import JumboSection from "../components/Jumbotron.jsx";
import AboutUs from "../components/aboutUs.js";
import SignUp from "../components/signUp.js";

function Login() {
    return (
        <div>
            <JumboSection
                title="Welcome to While You're There!"
                imageSrc="https://static.thenounproject.com/png/1700380-200.png"
                altText="shopping cart"
                imgClass="animate__animated animate__bounceInLeft"
            />

            <AboutUs />

            <SignUp />


        </div>

    )
}

export default Login;