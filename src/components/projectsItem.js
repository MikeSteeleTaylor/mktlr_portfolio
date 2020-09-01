import React from "react"
import styled from "styled-components"
import { generateColor } from "../utilities"
import { projects } from "../data"

const Project = styled.div`
  margin: 10px;
  width: 200px;
  height: 100px;
  background-color: ${generateColor};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    width: 205px;
    height: 105px;
    margin: 7.5px;
  }
`

const A = styled.a`
  color: black;
  text-decoration: none;
`

const ProjectItems = () => (
  <>
    {projects.map(project => (
      <A key={project.name + " link"} href={project.url} target="_blank">
        <Project key={project.name}>
          <h4
            key={project.name + " title"}
            style={{ margin: `auto`, zIndex: `10`, opacity: `1.0` }}
          >
            {project.name}
          </h4>
        </Project>
      </A>
    ))}
  </>
)

// {
//   const projectGallery = projects.map(project => {
//     ;<a href={project.url}>
//       <Project>
//         <h3>{project.name}</h3>
//       </Project>
//     </a>
//   })
// }

export default ProjectItems
