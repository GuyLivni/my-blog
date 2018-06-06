import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Container = styled('header')`
  margin-bottom: 60px;
`;

const Title = styled('h1')`
  font-weight: 300;
`;

const Brand = styled(Link)`
  font-size: 60px;
  &:hover { 
    text-decoration: none; 
  }
`;

const Desc = styled('p')`
  padding: 1em 0 0 0;
  font-size: 1rem;
  font-weight: 400;
  color: #7b7b7b;
  font-family: brandon-grotesque,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
`;

const Prefix = styled('span')`
  color: #ddd;
`;

const Header = () => (
  <Container>
    <Title>
      <Brand to="/">
        Guy<Prefix>'s blog</Prefix>
      </Brand>
      <Desc>a full stack software engineer.</Desc>
    </Title>
  </Container>
);

export default Header
