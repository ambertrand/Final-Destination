import React, { useEffect, useState } from 'react';
import UserInfo from "./pages/UserInfo";
import Shopping from "./pages/ShoppingList";
import Login from "./pages/Login";
import Stores from "./pages/Stores";
import Home from "./pages/Home";
import socket from "./utils/socket/socket";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// React Bootstrap
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

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
      <Router>
        <Container fluid>
          {/* Set up Router */}
          <Row className="navigation navbar navbar-light bg-light">
            <Col className="navigation-sub">
              <Link to="/" className="item navbar-brand">Login </Link>
              <Link to="/home" className="item navbar-brand">Home </Link>
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
      {/* <Button onClick={() => { socket.emit("chat", "socket works!") }}>emit</Button> */}
    </div>
  );
}

export default App;
