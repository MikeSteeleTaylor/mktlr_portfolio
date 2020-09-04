import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"
import { certs } from "../data"
import Image from "../components/image"

const A = styled.a`
  color: black;
  text-decoration: none;
`

const Cert = styled.div`
  margin: 20px;
  width: 200px;
  height: 150px;
  overflow: hidden;
`

const CertItems = () => {
  const [render, setRender] = useState(false)

  useEffect(() => {
    // setRender(true)
    const timeout = setTimeout(() => setRender(true), 100)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  if (!render) return null

  return (
    <>
      {certs.map(cert => {
        return (
          <Cert key={cert.name}>
            <Image filename={cert.image} alt={cert.name} />
          </Cert>
        )
      })}
    </>
  )
}

export default CertItems
