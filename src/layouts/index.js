import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/header';
import Footer from '../components/footer';

import faIconLibrary from '../styles/fa-icons';
import globalStyles from '../styles/global';

faIconLibrary();
globalStyles();

const Container = styled('div')`
   max-width: 46rem;
   padding: 4rem 1rem 0 1rem;
   margin-left: auto;
   margin-right: auto;
`;

const Content = styled('div')`
   margin-bottom: 100px;
`;

const Layout = ({ children, data }) => (
  <Container>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Guy Livni Blog" },
        { name: "keywords", content: "react, node, front-end, full-stack" }
      ]}
    />
    <Header />
    <Content>
      {children()}
    </Content>
    <Footer />
  </Container>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
