import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
      <p style={{ paddingLeft: `30px` }}>lorem ipsum...</p>
    </>
  )
}

export default About
