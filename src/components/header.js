import React from "react"
import {Link, graphQL, useStaticQuery} from 'gatsby'


const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    
    return (
      <div style={{ textAlign: `center`, height: `100px`, backgroundColor: `#eee` }}>
      <h3>{data.site.siteMetadata.title}</h3>
      </div>
    )
    

}

export default Header

