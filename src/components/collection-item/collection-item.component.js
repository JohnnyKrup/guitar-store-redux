import React from "react"
import "./collection-item.styles.scss"
import CustomButton from "../custom-button/custom-button.component"
import { connect } from "react-redux"
import { addItem } from "../../redux/cart/cart.actions"

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <div className="name">{name} </div>
        <div className="price">{price} $</div>
      </div>
      <CustomButton
        className="custom-button"
        onClick={() => addItem(item)}
        inverted
      >
        In den Warenkorb
      </CustomButton>
    </div>
  )
}

/**
 * When addItem is called, an item is passed in,
 * then the dispatch function executes the cart.action addItem
 * @param {*} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
