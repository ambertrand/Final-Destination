import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import WelcomeJumbo from "../components/welcomeJumbo.js";
import AboutUs from "../components/aboutUs.js";
import SignUp from "../components/signUp.js";

function Login() {
    return (
        <div>
            <WelcomeJumbo />

            <AboutUs />

            <SignUp />


        </div>

    )
}

export default Login;