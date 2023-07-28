import * as React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 700;
`;

function HomePage() {
  return (
    <main>
      <H1>Home page</H1>
    </main>
  );
}

export default HomePage;

export function Head() {
  return <title>Home Page</title>;
}
