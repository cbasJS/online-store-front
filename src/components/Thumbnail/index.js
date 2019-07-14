import React from "react"
import { formatNumber } from "../../utils/index"
import style from "./Thumbnail.module.css"
import PropTypes from "prop-types"

const Thumbnail = ({ productName, productPrice, productImage, _id }) => {
  return (
    <div className={style.thumbnail}>
      <div className={style.container}>
        <div>
          <h4>
            <b>{productName}</b>
          </h4>
        </div>
        <div>
          <p>${formatNumber(productPrice)}</p>
        </div>
      </div>

      {/* <div class="card">
        <img src="img_avatar.png" alt="Avatar" style="width:100%" />
        <div class="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div> */}
    </div>
  )
}

Thumbnail.propTypes = {
  productName: PropTypes.string,
  productPrice: PropTypes.number,
  productImage: PropTypes.string,
  _id: PropTypes.string,
}

export default Thumbnail
