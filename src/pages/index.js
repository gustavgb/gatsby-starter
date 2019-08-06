import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from 'components/layout'

export default ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
    <img src="https://i.kym-cdn.com/entries/icons/mobile/000/012/781/upload.jpg" alt="spoderman" />
    <Link to="/about">To infinity and beyond!</Link>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
