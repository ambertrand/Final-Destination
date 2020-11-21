import React from 'react';
import { Button } from './Styles';
import { useAuth0 } from '@auth0/auth0-react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import UserInfo from "../../pages/UserInfo";
import Shopping from "../../pages/ShoppingList";
import Login from "../../pages/Login";
import Home from "../../pages/Home";

const Logout = () => {
  const { isAuthenticated, logout } = useAuth0()
  return (

    isAuthenticated && (
      <div>

            <Router>
              {/* Set up Router */}
              <Row className="navigation navbar navbar-light bg-dark">
                <Col sm={12} className="navigation-sub">
                  <Link to="/" className="item navbar-brand text-white">About Us </Link>
                  <Link to="/home" className="item navbar-brand text-white">Home </Link>
                  <Link to="/shopping" className="item navbar-brand text-white">Shopping </Link>
                  <Link to="/userinfo" className="item navbar-brand text-white">User Info</Link>
                    <Link to="/" className = "item navbar-brand text-white" onClick={() => logout()}>
                    Log Out
                    {/* <Button onClick={() => logout()}>
                      Log Out
                    </Button> */}
                  </Link>
                  
                </Col>
              </Row>

              <Route exact path="/" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/shopping" component={Shopping} />
              <Route path="/userinfo" component={UserInfo} />

            </Router>


      </div>

    )
  )
}

export default Logout