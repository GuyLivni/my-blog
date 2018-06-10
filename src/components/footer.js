import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Container = styled('footer')`
  text-align: center;
  bottom: 0;
  left: 0;
  position: fixed;
  padding: 1rem 0 0.5rem 0;
  width: 100%;
  background-color: #f9f9f9;
  p {
    font-size: 0.7rem;
  }
`;

const Menu = styled('nav')`
  margin-bottom: 10px;
  a {
    color: #aaa;
    font-weight: 300;
    text-transform: lowercase;
    margin-right: 10px;
    :hover {
      color: #333;
    }
  }
`;

const Footer = () => (
  <Container>
    <Menu>
      <a href="https://github.com/GuyLivni" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></a>
      <a href="https://twitter.com/guy_livni" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
      <a href="https://www.linkedin.com/in/guylivni/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
    </Menu>
    <p>© {new Date().getFullYear()} Guy Livni. All rights reserved.</p>
  </Container>
);

export default Footer
