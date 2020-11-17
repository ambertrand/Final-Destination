import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './Styles';

const LoginButton = () => {
  const { isAuthenticated, loginWithPopup } = useAuth0()
  return (
    !isAuthenticated && (
      <Button onClick={() => loginWithPopup()}>
        Log in
      </Button>
    )
  )
}

export default LoginButton;