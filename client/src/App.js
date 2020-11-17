import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import { HashRouter as Router, Link } from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';


import Nav from './Nav';
import Home from './Home';
import Profile from './Profile';
import Callback from './Callback';
import Auth from './Auth/Auth';

import UserInfo from "./pages/UserInfo";
import Shopping from "./pages/ShoppingList";
import Login from "./pages/Login";
import socket from "./utils/socket/socket";

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Auth0Provider
    domain={ process.env.REACT_APP_AUTH0_DOMAIN }
    clientId={ process.env.REACT_APP_AUTH0_CLIENTID }
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);


function App({history}) {
  const auth = new Auth(history);

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
      <Nav auth={auth}/>
      <Router>
        <div className="App container-fluid background">
          {/* Set up Router */}
          <div className="row navigation navbar navbar-light bg-light">
            <div className=" col-12 navigation-sub">
              <Link to="/" className="item navbar-brand">Home </Link>
              <Link to="/shopping" className="item navbar-brand">Shopping </Link>
              <Link to="/userinfo" className="item navbar-brand">User Info</Link>
            </div>
          </div>
          <Route exact path="/" component={Login} />
          <Route exact path="/shopping" component={Shopping} />
          <Route path="/userinfo" component={UserInfo} />
        </div>
      </Router>

      <Switch> 
        
      <div className="body">
          <Route exact path="/" render={props => <Home auth={auth} {...props} />} />
          <Route exact path="/callback" render={props => <Callback auth={auth} {...props} />} />
          <Route exact path="/profile" render={props => <Profile auth={auth} {...props} />} /> 
      </div>

      </Switch>

      {/* <UserInfo />
      <Shopping />
      <Login /> */}

      {chatMessage}
      <button onClick={() => { socket.emit("chat", "socket works!") }}>emit</button>
    </div>
  );
}

export default withRouter(App);
