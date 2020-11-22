import Navbar from './components/layout/navigation/Navbar';

import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/layout/footer/Footer";
// React Bootstrap
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

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
      {/* <Navbar></Navbar>
      <Switch>
        <UserInfo></UserInfo>
        <UserInfo></UserInfo>
        <UserInfo></UserInfo>
        <UserInfo></UserInfo>
        <UserInfo></UserInfo>
        <UserInfo></UserInfo>
        <UserInfo></UserInfo>
      </Switch>
      <Footer></Footer> */}
    </div>


  );
}
export default App;
