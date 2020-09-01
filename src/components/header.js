import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <p style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <Link
          to="/#projects"
          style={{
            color: `black`,
            textDecoration: `none`,
            float: `right`,
            marginRight: `20px`,
          }}
        >
          Projects
        </Link>
        <Link
          to="/#skills"
          style={{
            color: `black`,
            textDecoration: `none`,
            float: `right`,
            marginRight: `20px`,
          }}
        >
          Skills
        </Link>
        <Link
          to="/#about"
          style={{
            color: `black`,
            textDecoration: `none`,
            float: `right`,
            marginRight: `20px`,
          }}
        >
          About
        </Link>
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
