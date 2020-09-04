/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

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
    <>
      <Header siteTitle={data.site.siteMetadata.title} id="header" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <br />
        <footer style={{ paddingBottom: 20 }}>
          © mktlr {new Date().getFullYear()}, Built with
          {` `}
          <a
            href="https://www.gatsbyjs.org"
            style={{ textDecoration: `none`, color: `#696969` }}
          >
            Gatsby
          </a>
          <Link
            to="/#header"
            style={{ textDecoration: `none`, float: `right`, color: `#696969` }}
          >
            / TOP \
          </Link>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
