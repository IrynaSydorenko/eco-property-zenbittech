import styled from 'styled-components';

export const LoginForm = styled.div`
  width: 40%;
  padding: 0 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  label {
    color: black;
    font-family: Merriweather;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    text-align: left;
    align-self: flex-start;
    margin: 0;
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 10px;
  color: #172234;
  font-family: Merriweather;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0px;
  align-self: flex-start;
`;

export const HelperText = styled.a`
  font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  color: #b29f7e;
  cursor: pointer;
  text-decoration: none;
  align-self: flex-end;
  position: relative;
  top: -8px;

  &:first-child {
    position: relative;
    top: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const SignUpText = styled.p`
  margin-top: 10px;
  font-family: Lato;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
  color: black;
  margin-top: 4px;
`;
