import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(
  <Auth0Provider
    domain={ process.env.AUTH0_DOMAIN }
    clientId={ process.env.AUTH0_CLIENTID }
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
import React from 'react';
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <div className="App">
      <UserInfo />
    </div>
  );
}

export default App;
