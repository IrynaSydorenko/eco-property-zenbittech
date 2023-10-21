import React from 'react';
import { Button, AuthButtonsBar, StyledHeader } from './styles';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <StyledHeader>
      {location.pathname !== '/login' && (
        <AuthButtonsBar>
          <Link to="login">
            <Button>Log In</Button>
          </Link>
          <Link to="login">
            <Button bg="#B29F7E" borderColor="#B29F7E" color="white">
              Sign Up
            </Button>
          </Link>
        </AuthButtonsBar>
      )}
    </StyledHeader>
  );
}

export default Header;
