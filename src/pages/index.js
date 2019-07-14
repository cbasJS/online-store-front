import React from "react"
import { Link } from "gatsby"

import MainLayout from "../layouts/MainLayout"
import StaticImage from "../components/StaticImage"
import SEO from "../components/SEO"

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </MainLayout>
)

export default IndexPage
