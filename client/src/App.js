import React, { useEffect, useState } from 'react';
import UserInfo from "./pages/UserInfo";
import Shopping from "./pages/ShoppingList";
import Login from "./pages/Login";
import socket from "./utils/socket/socket";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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

      {/* <UserInfo />
      <Shopping />
      <Login /> */}

      {chatMessage}
      <button onClick={() => { socket.emit("chat", "socket works!") }}>emit</button>
    </div>
  );
}

export default App;
