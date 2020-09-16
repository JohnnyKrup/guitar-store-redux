import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors"

import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component"

import "./checkout.styles.scss"

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Produkt</span>
        </div>
        <div className="header-block">
          <span>Bezeichnung</span>
        </div>
        <div className="header-block">
          <span>Menge</span>
        </div>
        <div className="header-block">
          <span>Preis</span>
        </div>
        <div className="header-block">
          <span>Entfernen</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: CHF {total}</span>
      </div>
      <div className="test-data">
        <h4>TEST CREDIT CARD DATA:</h4>
        <div className="payment">
          <span>Mastercard: </span> 5200 8282 8282 8210 / EXP: 01/25 / CVC: 123
        </div>
        <div className="payment">
          <span>Visa: </span> 4000 0566 5566 5556 / EXP: 01/25 / CVC: 123
        </div>
      </div>

      <StripeCheckoutButton price={total} />
    </div>
  )
}

/**
 * the object key in this function need to be passed in as
 * arguments in the component in our case: cartItems & total
 * otherwise we get a TypeError of undefined
 */
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage)
