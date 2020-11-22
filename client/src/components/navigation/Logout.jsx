import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import UserInfo from "../../pages/UserInfo";
import Shopping from "../../pages/ShoppingList";
import Login from "../../pages/Login";
import Home from "../../pages/Home";
import About from "../../pages/About";


const Logout = () => {
  const { isAuthenticated, logout } = useAuth0()
  return (

    isAuthenticated && (
      <div>

        <Router>
          {/* Set up Router */}
          <Row className="navigation navbar navbar-light bg-dark">
            <Col sm={12} className="navigation-sub">
              <Link to="/" className="item navbar-brand text-white">Home</Link>
              <Link to="/userinfo" className="item navbar-brand text-white">Profile</Link>
              <Link to="/shopping" className="item navbar-brand text-white">Shopping </Link>
              <Link to="/home" className="item navbar-brand text-white">About/Contact Us </Link>
              <Link to="/" className="item navbar-brand text-white" onClick={() => logout()}>
                Log Out
                    {/* <Button onClick={() => logout()}>
                      Log Out
                    </Button> */}
              </Link>
            </Col>
          </Row>
          <Route exact path="/" component={Login} />
          <Route path="/userinfo" component={UserInfo} />
          <Route exact path="/shopping" component={Shopping} />
          <Route exact path="/home" component={Home} />
        </Router>


      </div>

    )
  )
}

export default Logout