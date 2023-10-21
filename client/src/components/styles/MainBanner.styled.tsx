import styled from 'styled-components';

export const StyledMainBanner = styled.section`
  min-height: calc(100vh - 80px);
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  box-sizing: border-box;

  &::before {
    content: '';
    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
      url(./images/main-banner.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }

  h1 {
    font-family: Merriweather;
    font-size: 64px;
    font-weight: 700;
    line-height: 80px;
    text-align: center;
    margin: 0;
    z-index: 1;
  }

  p {
    font-family: Lato;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    text-align: center;
    z-index: 1;
    max-width: 750px;
    margin: 10px 0 20px;
  }

  button {
    z-index: 1;
  }
`;
