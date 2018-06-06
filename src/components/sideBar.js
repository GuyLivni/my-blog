import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e6e6;
  max-width: 260px;
  padding: 0.5rem;
  margin-bottom: 25px;
  height: 100%;
`;

const Sidebar = ({ title, description }) => (
  <Container>
    <strong>{title}.</strong> {description}
  </Container>
);

export default Sidebar
