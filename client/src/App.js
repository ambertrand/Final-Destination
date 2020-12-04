import React, { useState } from 'react';
import Navigation from './components/layout/navigation/Navbar';
import UserInfo from "./views/UserInfo";
import Shopping from "./views/ShoppingList";
import LandingPage from "./views/LandingPage";
import Home from "./views/Home";
import About from "./views/About";
import Footer from "./components/layout/footer/Footer";
import userContext from './components/form/userContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import BackgroundImage from './assets/GroceryStore.jpg';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee)


function App() {
  const [userId, setUserId] = useState("");

  const getUserId = (id) => {
    setUserId(id);
  }

  const backgroundStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
  }

  return (
    <div className="App container-fluid outerContainer" style={ backgroundStyle }>
      <userContext.Provider value={userId}>
        < Router >

          <Navigation />

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" render={(props) => (
              <Home getUserId={getUserId} />
            )} />
            <Route exact path="/userinfo" component={UserInfo} />
            <Route exact path="/shopping" component={Shopping} />
            <Route exact path="/about" component={About} />
          </Switch>

          <Footer />

        </Router >
      </userContext.Provider>
    </div>


  );
}
export default App;
