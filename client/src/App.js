import React from 'react';
import Navigation from './components/layout/navigation/Navbar';
import UserInfo from "./views/UserInfo";
import Shopping from "./views/ShoppingList";
import LandingPage from "./views/LandingPage";
import Home from "./views/Home";
import About from "./views/About";
import Footer from "./components/layout/footer/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App container-fluid">
      < Router >

        <Navigation />

        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/userinfo">
            <UserInfo />
          </Route>
          <Route exact path="/shopping">
            <Shopping />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />


        {/* {chatMessage} */}
        {/* <Button onClick={() => { socket.emit("chat", "socket works!") }}>emit</Button> */}


      </Router >
    </div>


  );
}
export default App;
