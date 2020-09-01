import React from "react"
// import { Link } from "gatsby"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHero from "../components/homeHero"
import WebDeveloper from "../assets/web-developer.svg"
import Wrapper from "../components/wrapper"
import ProjectItems from "../components/projectsItem"
import SkillItems from "../components/skillItems"
import About from "../components/about"

const SectionTitle = styled.h3`
  width: 100%;
  padding: 10px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHero>
      <div style={{ width: `400px`, height: `auto` }}>
        <h1>
          Hi my name is <span style={{ color: "#154360" }}>Mike</span>. <br />{" "}
          I'm a developer / designer looking for opportunities.
        </h1>
      </div>
      <div style={{ width: `400px`, height: `auto`, padding: 20 }}>
        <WebDeveloper style={{ width: `100%`, height: `100%` }} />
      </div>
    </HomeHero>
    <Wrapper>
      <SectionTitle id="projects">Projects</SectionTitle>
      <ProjectItems />
    </Wrapper>
    <Wrapper>
      <SectionTitle id="skills">Skills</SectionTitle>
      <SkillItems />
    </Wrapper>
    <Wrapper>
      <SectionTitle id="about">About</SectionTitle>
      <About />
    </Wrapper>
  </Layout>
)

export default IndexPage
