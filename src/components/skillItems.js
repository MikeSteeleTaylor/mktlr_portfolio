import React from "react"
import { skills } from "../data"
import {
  SkillWrapper,
  SkillTitle,
  SkillBar,
  SkillAmount,
} from "../styles/skills"

const SkillItems = () => (
  <>
    {skills.map(skill => (
      <SkillWrapper key={skill.name + " container"}>
        <SkillTitle key={skill.name}>{skill.name}</SkillTitle>
        <SkillBar key={skill.name + " bar"}>
          <SkillAmount
            key={skill.name + " proficiency"}
            proficiency={skill.proficiency}
          />
        </SkillBar>
      </SkillWrapper>
    ))}
  </>
)

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
