import Profile from './components/Profile';
import Navbar from './components/Navbar';

import React, { useEffect, useState } from 'react';
import UserInfo from "./pages/UserInfo";
import Shopping from "./pages/ShoppingList";
import Login from "./pages/Login";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer"
// React Bootstrap
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />

      <Router>
        <Container fluid>
          {/* Set up Router */}
          <Row className="navigation navbar navbar-light bg-light">
            <Col className="navigation-sub">
            <Link to="/" className="item navbar-brand">Home </Link>
              <Link to="/shopping" className="item navbar-brand">Shopping </Link>
              <Link to="/userinfo" className="item navbar-brand">User Info</Link>
            </Col>
          </Row>

          <Route exact path="/" component={Login} />
          <Route exact path="/shopping" component={Shopping} />
          <Route path="/userinfo" component={UserInfo} />

        </Container>
      </Router>

      {/* <UserInfo />
      <Shopping />
      <Login /> */}
<<<<<<< HEAD
=======

      {/* {chatMessage} */}
      {/* <Button onClick={() => { socket.emit("chat", "socket works!") }}>emit</Button> */}
>>>>>>> 55b79f0679fd4f2bee2b4e55f1547150a73056df
   <Footer />
    </div>


  );
}
export default App;
