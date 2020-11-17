/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="page-container">
      <div id="content-wrap">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
      </div>
      <footer>
        Built by Avi Warner with a mouse, keyboard {'& '}
        <a href="https://www.gatsbyjs.com">Gatsby</a>.
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
