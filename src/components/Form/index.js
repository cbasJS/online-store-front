import React, { useState, useRef } from "react"
import fetch from "cross-fetch"
global.Headers = fetch.Headers

const Form = () => {
  const [nameOfProduct, setNameOfProduct] = useState("")
  const [priceOfProduct, setPriceOfProduct] = useState(0)
  const [msg, setMsg] = useState("")
  const inputRefName = useRef(null)

  const handleChangeName = event => {
    setNameOfProduct(event.target.value)
  }

  const handleChangePrice = event => {
    setPriceOfProduct(event.target.value)
  }

  const handleSubmit = event => {
    const staticUrl = "no-preview.png"
    fetch(
      "https://7mkody5dld.execute-api.us-east-1.amazonaws.com/staging/createProduct",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
          productImage: staticUrl,
          productName: nameOfProduct,
          productPrice: priceOfProduct,
        }),
      }
    ).then(response => {
      //do something awesome that makes the world a better place
      console.log(response)
      if (response.status === 200) {
        setNameOfProduct("")
        setPriceOfProduct(0)
        inputRefName.current.focus()
        setMsg("Se ha agregado el producto")
      } else {
        setMsg("Algo ha salido mal :(")
      }
    })

    event.preventDefault()
  }

  return (
    <form>
      <div>
        <label>
          Name of product:
          <input
            type="text"
            name="name"
            ref={inputRefName}
            value={nameOfProduct}
            onChange={handleChangeName}
            placeholder="Type something"
          />
        </label>
      </div>
      <div>
        <label>
          Price of product:
          <input
            type="number"
            name="price"
            value={priceOfProduct}
            onChange={handleChangePrice}
          />
        </label>
      </div>
      <div>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </div>
      <div>
        <span
          style={{
            color: msg === "Se ha agregado el producto" ? "green" : "red",
          }}
        >
          {msg}
        </span>
      </div>
    </form>
  )
}

export default Form
