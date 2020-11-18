import React from 'react';
import { StyledNavbar } from './Styles'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Navbar = () => {
  return (
    <StyledNavbar>
      <LoginButton />
      <LogoutButton />
    </StyledNavbar>
  )
}

export default Navbar
