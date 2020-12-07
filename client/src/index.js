import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth0ProviderWithHistory  from './auth/Auth0ProviderWithHistory';

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENTID

ReactDOM.render(
  <Auth0ProviderWithHistory
    domain={domain}
    clientId={clientId}
    redirectUri={(window.location.origin) + "/auth-callback"}
  >
    <App />
  </Auth0ProviderWithHistory>,
  document.getElementById('root')
);
