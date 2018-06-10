import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Container = styled('div')`
  padding-bottom: 2rem;
`;

const PostTitle = styled('h2')`
  margin-bottom: 0;
`;

const PostList = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(260px,1fr));
`;

const Tags = styled('ul')`
  display: flex;
  list-style: none;
  font-size: 0.8rem;
  li > a {
    margin-right: 10px;
    color: #aa0505;
  }
`;

const Date = styled('div')`
  margin-bottom: 0.5rem;
  font-size: .75rem;
  text-transform: uppercase;
  font-weight: 400;
  color: #777;
`;

const Preview = styled('p')`
  font-size: 0.7rem;
  font-weight: 400;
  margin-bottom: 5px;
  color: #c3c3c3;
`;

const IndexPage = ({ data }) => {

  const {  edges: posts } = data.allMarkdownRemark;

  return (
    <Container>
      <PostList>
        {posts.map(({ node: post }) => {
          const { frontmatter, id } = post;
          const { path, title, date, tags } = frontmatter;

          return (
            <div key={id}>
              <PostTitle>
                <Link to={path}>{title}</Link>
              </PostTitle>
              <Date>
                <time>{date}</time>
              </Date>
              <Preview>{post.excerpt}</Preview>
              <Tags>
                {tags.map((tag, index) => {
                  return (
                    <li key={index}>
                      <Link to={`/tags/${tag}`}>
                        #{tag}
                      </Link>
                    </li>
                  )
                })}
              </Tags>
            </div>
          );
        })}
      </PostList>
      {/*<SideBar title="About Me" description="I'm a full stack software engineer based in Berlin. Food and sweets fanatic. I like anime, bouldering and gaming." />*/}
    </Container>
  )
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: {
       order: DESC,
       fields: [frontmatter___date] 
       }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`;

export default IndexPage
