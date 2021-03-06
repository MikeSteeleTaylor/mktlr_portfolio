import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"
import { jobs } from "../data"
import Image from "../components/image"
import { jobsPH } from "../data"

const Job = styled.div`
  margin: 20px;
  width: 200px;
  height: 150px;
  overflow: hidden;
`

const WorkItems = () => {
  const [render, setRender] = useState(false)

  useEffect(() => {
    // setRender(true)
    const timeout = setTimeout(() => setRender(true), 100)
    return () => {
      clearTimeout(timeout)
      jobsPH()
    }
  }, [])

  // const showModal = () => {
  //   setShow(true)
  // }

  // const hideModal = () => {
  //   setShow(false)
  // }

  if (!render) return null

  return (
    <>
      {jobs.map(job => {
        return (
          <Job key={job.name}>
            <Image filename={job.image} alt={job.name} />
            {/* <ImageModal onShow={} handleclose={hideModal}>
              <Image filename={job.image} alt={job.name} />
            </ImageModal> */}
          </Job>
        )
      })}
    </>
  )
}

export default WorkItems
