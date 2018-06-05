import React from 'react'
import Link from 'gatsby-link'

import '../styles/blog-listing.css';

const IndexPage = ({ data }) => {

  const {  edges: posts } = data.allMarkdownRemark;

  return (
    <div className="blog-posts">
      {posts.map(({ node: post }) => {
        const { frontmatter, id } = post;

        return (
          <div className="blog-post-preview" key={id}>
            <h1>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </h1>
            <h2>{frontmatter.date}</h2>
            <p>{post.excerpt}</p>
            <ul>
              {frontmatter.tags.map((tag, index) => {
                return (
                  <li key={index}>
                    <Link to={`/tags/${tag}`}>
                      {tag}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        );
      })}
    </div>
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
