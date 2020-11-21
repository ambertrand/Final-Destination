import Profile from './components/navigation/Profile';
import Navbar from './components/navigation/Navbar';

import React, { useEffect, useState } from 'react';
import UserInfo from "./pages/UserInfo";
import Shopping from "./pages/ShoppingList";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer"
// React Bootstrap
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import JumboSection from "./components/welcomeJumbotron.jsx";
import AboutUs from "./components/aboutUs.js";
import SignUp from "./components/signUp.js";

import './App.css';

function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      <Row>
        
      </Row>
      {/* <Profile /> */}

      

      {/* <UserInfo />
      <Shopping />
      <Login /> */}

      {/* {chatMessage} */}
      {/* <Button onClick={() => { socket.emit("chat", "socket works!") }}>emit</Button> */}
      <Footer />
    </div>


  );
}
export default App;
