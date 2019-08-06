import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div style={{ width: '600px', margin: '3px auto' }}>
      <h3>{data.site.siteMetadata.title}</h3>
      {children}
    </div>
  )
}
