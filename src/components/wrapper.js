import React from "react"
import styled from "styled-components"

const SectionWrapper = styled.div`
  margin: 40px 0;
  width: 100%;
  height: auto;
  padding: 10px;
  border: 2px solid #f5f5f5;
  text-align: left;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
`

const Wrapper = props => <SectionWrapper>{props.children}</SectionWrapper>

export default Wrapper
