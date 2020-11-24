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
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/userinfo" component={UserInfo} />
          <Route exact path="/shopping" component={Shopping} />
          <Route exact path="/about" component={About} />
        </Switch>

        <Footer />


        {/* {chatMessage} */}
        {/* <Button onClick={() => { socket.emit("chat", "socket works!") }}>emit</Button> */}

      
    </Router >
    </div>


  );
}
export default App;
