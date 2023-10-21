import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ theme }) => theme.backgrounds.header};
  padding: 18px;
  min-height: 80px;
  box-sizing: border-box;
`;
