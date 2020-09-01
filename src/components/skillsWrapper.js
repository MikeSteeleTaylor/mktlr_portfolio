import React from "react"
import styled from "styled-components"

const SkillsWrapper = styled.div`
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
`

const Skills = props => <SkillsWrapper>{props.children}</SkillsWrapper>

export default Skills
