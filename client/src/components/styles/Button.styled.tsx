import styled from 'styled-components';

interface ButtonProps {
  color?: string;
  bg?: string;
  width?: string;
  borderColor?: string;
  hoverColor?: string;
  hoverTextColor?: string;
  margin?: string;
}

export const Button = styled.button<ButtonProps>`
  color: ${({ color }) => color || '#B29F7E'};
  background-color: ${({ bg }) => bg || 'transparent'};
  padding: 12px 0px 12px 0px;
  margin: ${({ margin }) => margin || '0 0 0 10px'};
  width: ${({ width }) => width || '160px'};
  border: none;
  border: 1px solid ${({ borderColor }) => borderColor};
  cursor: pointer;
  border-radius: 5px;
  font-family: Merriweather;
  font-size: 16px;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || '#b29f7e'};
    color: ${({ hoverTextColor }) => hoverTextColor || 'white'};
    transform: scale(0.98);
  }
`;
