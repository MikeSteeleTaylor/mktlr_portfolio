import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components/macro"

const HeaderWrapper = styled.header`
  background: white;
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-content: center;
  }
`

const Title = styled.div`
  text-align: center;
`
const Nav = styled.div`
  @media (max-width: 768px) {
    padding: 40px 0 0 0;
    font-size: 1.5rem;
    text-align: center;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Title>
      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </Title>
    <Nav>
      <Link
        to="/#projects"
        style={{
          color: `#696969`,
          textDecoration: `none`,
          textAlign: "center",
          marginRight: `20px`,
        }}
      >
        Projects
      </Link>
      <Link
        to="/#skills"
        style={{
          color: `#696969`,
          textDecoration: `none`,
          textAlign: "center",
          marginRight: `20px`,
        }}
      >
        Skills
      </Link>
      <Link
        to="/#about"
        style={{
          color: `#696969`,
          textDecoration: `none`,
          textAlign: "center",
          marginRight: `20px`,
        }}
      >
        About
      </Link>
      <Link
        to="/#work"
        style={{
          color: `#696969`,
          textDecoration: `none`,
          textAlign: "center",
          marginRight: `20px`,
        }}
      >
        Work
      </Link>
    </Nav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
