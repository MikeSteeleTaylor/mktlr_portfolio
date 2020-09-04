import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"
// import { generateColor } from "../utilities"
import { projects } from "../data"

// const generateColor = () => {
//   return "#" + Math.random().toString(16).substr(-6) + "99"
// }

const A = styled.a`
  color: black;
  text-decoration: none;
`

const Project = styled.div`
  margin: 20px;
  width: 200px;
  height: 100px;
  background-color: ${props => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    width: 205px;
    height: 105px;
    margin: 17.5px;
  }
`

const ProjectItems = () => {
  const [render, setRender] = useState(false)

  useEffect(() => {
    // setRender(true)
    const timeout = setTimeout(() => setRender(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  if (!render) return null

  return (
    <>
      {projects.map(project => (
        <A key={project.name + " link"} href={project.url} target="_blank">
          <Project
            key={project.name}
            bg={"#" + Math.random().toString(16).substr(-6) + "99"}
          >
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
}

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
