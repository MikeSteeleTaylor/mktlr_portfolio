import React from "react"
import styled from "styled-components"

const HomeHeroWrapper = styled.div`
  margin: 0 0;
  width: 100%;
  height: 600px;
  padding: 20px;

  text-align: left;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`

const HomeHero = props => <HomeHeroWrapper>{props.children}</HomeHeroWrapper>

export default HomeHero
