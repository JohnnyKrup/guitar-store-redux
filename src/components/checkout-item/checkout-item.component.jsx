import React from "react"
import { connect } from "react-redux"

import {
  clearItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions"

import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles"

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { imageUrl, name, quantity, price } = cartItem
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

/**
 * Every time data gets edited, we use dispatch,
 * when we just want to access it to display we use mapStateToProps
 * @param {*} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
