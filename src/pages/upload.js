import React from "react"
import { Link } from "gatsby"

import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Form from "../components/Form"

const UploadPage = () => (
  <MainLayout>
    <SEO title="Upload" />
    <h1>Upload a product</h1>
    <Link to="/">Go to index</Link> <br></br>
    <Link to="/list/">List of products</Link>
    <Section>
      <Form />
    </Section>
  </MainLayout>
)

export default UploadPage
