import React, { useState, useEffect } from "react"
import { skills } from "../data"
import {
  SkillWrapper,
  SkillTitle,
  SkillBar,
  SkillAmount,
} from "../styles/skills"

const SkillItems = () => {
  const [render, setRender] = useState(false)

  useEffect(() => {
    // setRender(true)
    const timeout = setTimeout(() => setRender(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  if (!render) return null

  return (
    <>
      {skills.map(skill => (
        <SkillWrapper key={skill.name + " container"}>
          <SkillTitle key={skill.name}>{skill.name}</SkillTitle>
          <SkillBar key={skill.name + " bar"}>
            <SkillAmount
              key={skill.name + " proficiency"}
              proficiency={skill.proficiency}
              bg={"#" + Math.random().toString(16).substr(-6) + "99"}
            />
          </SkillBar>
        </SkillWrapper>
      ))}
    </>
  )
}

// {
//   return (
//     <SkillWrapper>
//       <SkillTitle>{props.skillName}</SkillTitle>
//       <SkillBar>
//         <SkillAmount proficiency={props.proficiency} />
//       </SkillBar>
//     </SkillWrapper>
//   )
// }

export default SkillItems
