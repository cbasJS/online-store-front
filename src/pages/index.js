import React from "react"
import { Link } from "gatsby"

import MainLayout from "../layouts/MainLayout"
import StaticImage from "../components/StaticImage"
import SEO from "../components/SEO"

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to the online store project.</p>
    <p>Now go ahead and do something wonderful.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage />
    </div>
    <Link to="/upload/">Upload a product</Link> <br></br>
    <Link to="/list/">List of products</Link>
  </MainLayout>
)

export default IndexPage
