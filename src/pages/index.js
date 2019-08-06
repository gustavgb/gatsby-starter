import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from 'components/layout'

export default ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
    <img src="https://i.kym-cdn.com/entries/icons/mobile/000/012/781/upload.jpg" alt="spoderman" />
    <Link to="/about">To infinity and beyond!</Link>
    <ul>
      {data.allFile.edges.map(({ node }) => (
        <li key={node.id}>{node.relativePath}</li>
      ))}
    </ul>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div>
        <h3>{node.frontmatter.title}</h3>
        <h4>{node.frontmatter.date}</h4>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile {
      edges {
        node {
          id
          absolutePath
          relativePath
          prettySize
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          excerpt
          html
        }
      }
    }
  }
`
