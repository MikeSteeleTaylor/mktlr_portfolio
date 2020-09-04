import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components/macro"

const H1 = styled.h1`
  margin-top: 200px;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <H1>NOT FOUND</H1>
    <p style={{ marginBottom: 200 }}>
      You just hit a route that doesn&#39;t exist... the sadness.
    </p>
  </Layout>
)

export default NotFoundPage
