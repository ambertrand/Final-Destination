import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import JumboSection from "../components/welcomeJumbotron.jsx";
import AboutUs from "../components/aboutUs.js";
import SignUp from "../components/signUp.js";

function Login() {
    return (
        <div>
            <JumboSection />

            <AboutUs />

            <SignUp />


        </div>

    )
}

export default Login;