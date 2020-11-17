import React from 'react';
import UserInfo from "./pages/UserInfo";
import Shopping from "./pages/ShoppingList";
import Login from "./pages/Login";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// React Bootstrap
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}
export default App;
