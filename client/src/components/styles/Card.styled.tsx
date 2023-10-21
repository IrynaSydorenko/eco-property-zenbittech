import styled from 'styled-components';

interface CardProps {
  bgUrl?: string;
}

interface TextColumnCardProps {
  justifyContent?: string;
  alignItems?: string;
  minHeight?: string;
}

export const Card = styled.div<CardProps>`
  background-image: url(${({ bgUrl }) => bgUrl || './images/main-banner.png'});
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  width: calc(50% - 20px);
  margin: 10px;
  min-height: 300px;
  color: #ffffff;
  display: flex;
  align-items: flex-end;
  padding: 16px 14px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;

  p {
    margin: 0;
  }

  span {
    font-family: Lato;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0px;
    width: fit-content;
    margin-top: 2px;
  }
`;

export const TitleCard = styled.h3`
  width: 100%;
  text-align: left;
  margin-bottom: 0px;
  margin-top: 0;
  font-family: Merriweather;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0px;
`;

export const TextColumnCard = styled.div<TextColumnCardProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  margin-top: 5px;
  min-height: ${({ minHeight }) => minHeight || 'auto'};
`;
