import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import  App  from './App';
import Auth0ProviderWithHistory  from './auth/Auth0ProviderWithHistory';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  <Router>
  <Auth0ProviderWithHistory>
    <App />
  </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);
