import Profile from './components/Profile';
import Navbar from './components/Navbar';

import React, { useEffect, useState } from 'react';
import UserInfo from "./pages/UserInfo";
import Shopping from "./pages/ShoppingList";
import Login from "./pages/Login";
import Stores from "./pages/Stores";
import Home from "./pages/Home";
import socket from "./utils/socket/socket";
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
  const [chatMessage, setChatMessage] = useState("");
  useEffect(() => {
    socket.on("chat", (data) => {
      setChatMessage(data);
    });
    return () => {
      socket.off("chat");
    }
    // dependency array, put user object in array if we want the callback function to fire everytime userobject sees a change
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Profile />

      <Router>
        <Container fluid>
          {/* Set up Router */}
          <Row className="navigation navbar navbar-light bg-light">
            <Col className="navigation-sub">
<<<<<<< HEAD
              <Link to="/" className="item navbar-brand">Home </Link>
=======
              <Link to="/" className="item navbar-brand">Login </Link>
              <Link to="/home" className="item navbar-brand">Home </Link>
>>>>>>> dec9bdef0b0c075cd2c110d36935cca493073afa
              <Link to="/shopping" className="item navbar-brand">Shopping </Link>
              <Link to="/stores" className="item navbar-brand">Stores </Link>
              <Link to="/userinfo" className="item navbar-brand">User Info</Link>
            </Col>
          </Row>

          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route path="/stores" component={Stores} />
          <Route exact path="/shopping" component={Shopping} />
          <Route path="/userinfo" component={UserInfo} />

        </Container>
      </Router>

      {/* <UserInfo />
      <Shopping />
      <Login /> */}

      {chatMessage}
<<<<<<< HEAD
      {/*<Button onClick={() => { socket.emit("chat", "socket works!") }}>emit</Button>*/}
=======
      {/* <Button onClick={() => { socket.emit("chat", "socket works!") }}>emit</Button> */}
   <Footer />
>>>>>>> dec9bdef0b0c075cd2c110d36935cca493073afa
    </div>


  );
}

export default App;
