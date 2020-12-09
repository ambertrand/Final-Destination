import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from './components/layout/navigation/Navbar';
import UserInfo from "./views/UserInfo";
import Shopping from "./views/ShoppingList";
import LandingPage from "./views/LandingPage";
import Home from "./views/Home";
import About from "./views/About";
import Footer from "./components/layout/footer/Footer";
import userContext from './components/form/userContext';
import UserProfileProvider from './components/providers/userProfileProvider/Provider';
import getUserInfo from './components/form/getUserInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import BackgroundImage from './assets/GroceryStore.jpg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

library.add(fab);

function App() {
  // const [groupId, setGroupId] = useState("");
  const [userId, setUserId] = useState("");
  const [userProfile, setUserProfile] = useState({
    email: "",
    first_name: "",
    last_name: "",
    username: "",
    picture: "",
    shopper: 1
  });

  const getUserId = (id) => {
    setUserId(id);
  }

  const backgroundStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
  }

  const { user, isAuthenticated } = useAuth0();


  useEffect(() => {
    if (isAuthenticated) {
      // console.log(user);
      axios.post("/api/users/onAuthenticated", user)
        .then(function (response) {
          // console.log(response);
          // setUserProfile(response);
          getUserId(response.data[0].id);
          return getUserInfo(response.data[0].id);
        }).then(function (response) {
          // console.log(response);
          // console.log("new response above");
          setUserProfile(response.data);
        });
    }
  }, [isAuthenticated, user]);

  return (
    <div className="App container-fluid outerContainer" style={backgroundStyle}>
      <userContext.Provider value={userId}>
        <UserProfileProvider user={userProfile}>
          < Router >

            <Navigation />

            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route exact path="/userinfo">
                <UserInfo />
              </Route>
              <Route exact path="/home">
                <Home getUserId={getUserId} />
              </Route>
              <Route exact path="/shopping">
                <Shopping getUserId={getUserId} />
              </Route>
              <Route exact path="/about" component={About} />
            </Switch>

            <Footer />

          </Router >
        </UserProfileProvider>
      </userContext.Provider>
    </div>


  );
}
export default App;