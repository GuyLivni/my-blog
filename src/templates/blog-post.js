import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const PostTitle = styled('h2')`
  margin-bottom: 0;
`;

const Date = styled('div')`
  margin-bottom: 2rem;
  font-size: .75rem;
  text-transform: uppercase;
  font-weight: 400;
  color: #777;
`;

const NextPrevNav = styled('p')`
  display: flex;
  flex-direction: column;
`;

const nextPrevNavigation = (next, prev) => (
  <NextPrevNav>
    {prev && (
      <Link to={prev.frontmatter.path}>
        Previous: {prev.frontmatter.title}
      </Link>
    )}
    {next && (
      <Link to={next.frontmatter.path}>
        Next: {next.frontmatter.title}
      </Link>
    )}
  </NextPrevNav>
);

const Template = ({data, location, pathContext}) => {
  const {markdownRemark: post} = data;
  const {frontmatter, html} = post;
  const {title, date} = frontmatter;
  const {next, prev} = pathContext;

  return (
    <div>
      <Helmet title={`${title} - Guy Livni Blog`}/>
      <PostTitle>{title}</PostTitle>
      <Date>
        <time>{date}</time>
      </Date>
      <div dangerouslySetInnerHTML={{__html: html}}/>
      {nextPrevNavigation(next, prev)}
    </div>
  )
};

export const pageQuery = graphql`
query BlogPostByPath($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      path
      tags
      excerpt
    }
  }
}
`;

export default Template;
