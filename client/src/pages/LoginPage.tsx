import React from 'react';
import {
  Button,
  Container,
  StyledMainBanner,
  Input,
  LoginForm,
  FormTitle,
  HelperText,
  SignUpText,
} from '../components/styles';

function LoginPage() {
  return (
    <Container>
      <StyledMainBanner />
      <LoginForm>
        <FormTitle>Login</FormTitle>
        <label htmlFor="email">Email</label>
        <Input id="email" type="email" placeholder="Email" />
        <label htmlFor="email">Password</label>
        <Input id="password" type="password" placeholder="Password" />
        <HelperText>Forgot password?</HelperText>
        <Button margin="15px 0 0 0" width="100%" bg="#B29F7E" color="white">
          Sign In
        </Button>
        <SignUpText>
          Don't have account? <HelperText>Sign Up</HelperText>
        </SignUpText>
      </LoginForm>{' '}
    </Container>
  );
}

export default LoginPage;
