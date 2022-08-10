

import * as React from 'react'

import { Link, useStaticQuery, graphql } from 'gatsby'
//css:
import
    {container, navigation, heading, header}
        from "../components/layout.module.css"


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

    const siteTitle = data.site.siteMetadata.title

  return (

    <div className={container}>

     <title>{siteTitle} | {pageTitle}</title>

     <header className={header}>
        {siteTitle}
     </header>

      <nav>

        <ul className={navigation}>

          <li><Link to="/">Home</Link></li>

          <li><Link to="/about">About</Link></li>

          <li><Link to="/articles">Articles</Link></li>

        </ul>

      </nav>

      <main>

         <h1 className={heading}>{pageTitle}</h1>

        {children}

      </main>

    </div>
  )
}
export default Layout
