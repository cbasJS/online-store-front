import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import fetch from "cross-fetch"

import MainLayout from "../layouts/MainLayout"

import SEO from "../components/SEO"
import Thumbnail from "../components/Thumbnail"
import SectionThumbnails from "../components/SectionThumbnails"
import Loading from "../components/Loading"

// Config
global.Headers = fetch.Headers

const ListPage = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(
      "https://7mkody5dld.execute-api.us-east-1.amazonaws.com/staging/getProducts"
    )
      .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad response from server")
        }
        return res.json()
      })
      .then(products => {
        setData(JSON.parse(products.body))
      })
      .catch(err => {
        console.error(err)
      })
  }, [])
  return (
    <MainLayout>
      <SEO title="List" />
      <h1>List of products</h1>
      <Link to="/">Go to index</Link> <br></br>
      <Link to="/upload/">Upload a product</Link>
      {data === null ? (
        <Loading />
      ) : (
        <SectionThumbnails>
          {data.map(lineItem => {
            return (
              <Thumbnail
                key={lineItem._id}
                productName={lineItem.productName}
                productPrice={lineItem.productPrice}
                productImage={lineItem.productImage}
              />
            )
          })}
        </SectionThumbnails>
      )}
    </MainLayout>
  )
}

export default ListPage
