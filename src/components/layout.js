import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navigation from './navigation'
import '../styles/layout.css'

const Layout = ({ pageTitle, children }) => {
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
    <div className='container'>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <Navigation></Navigation>
        <main className="main">
            <div>
                {children}  
            </div>
        </main> 
    </div>
  )
}

export default Layout