import styled, { css, keyframes } from "styled-components"
import { generateColor } from "../utilities"

export const fill1 = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 75%;
    background-color: ${generateColor()};
  }
`
export const fill2 = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 50%;
    background: ${generateColor()};
  }
`
export const fill3 = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 30%;
    background: ${generateColor()};
  }
`

export const SkillWrapper = styled.div`
  margin: 10px;
  width: 100%;
  height: 80px;
  text-align: left;
`

export const SkillTitle = styled.h4`
  padding: 20px 20px 0;
`

export const SkillBar = styled.div`
  width: 90%;
  height: 12px;
  margin: 0 20px;
  padding: 0;
  background-color: white;
  position: relative;
  z-index: 10;
`

export const SkillAmount = styled.div`
  height: 100%;
  position: relative;
  transition: width 0.5s ease-out;
  ${SkillWrapper}:hover & {
    ${css`
      animation: ${props => props.proficiency} 0.7s ease-in-out;
      animation-fill-mode: forwards;
      background-color: white;
      width: 0%;
    `};
  }
  @media (max-width: 768px) {
    ${css`
      animation: ${props => props.proficiency} 0.7s ease-in-out;
      animation-fill-mode: forwards;
      background-color: white;
      width: 0%;
    `};
  }
`
