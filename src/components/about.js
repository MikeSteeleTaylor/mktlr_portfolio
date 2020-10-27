import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components/macro"

const P = styled.p`
  padding-left: 30px;
  @media (max-width: 768px) {
    padding: 30px 0 30px 20px;
  }
`

const Mike = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mike-portfolio.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      imgStyle={{ paddingLeft: `20px` }}
    />
  )
}

const About = () => {
  return (
    <>
      <div style={{ width: `400px` }}>
        <Mike />
      </div>
    </>
  )
}

export default About
