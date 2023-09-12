/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const StyledList = styled.ul`
  padding: 0;
  list-style: none; 

  li {
    margin: 30px 0;
  }

  h3 {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 700;
    margin: 0;
  }

  p {
    font-size: ${({ theme }) => theme.font.size.paragraph};
  }

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
  }
`;
