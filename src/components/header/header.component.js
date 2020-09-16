import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { auth } from "../../firebase/firebase.utils"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { selectCartHidden } from "../../redux/cart/cart.selectors"
import { selectCurrentUser } from "../../redux/user/user.selectors"

import { ReactComponent as Logo } from "../../assets/LogoNoText_128.svg"

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles"

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            ABMELDEN
          </OptionLink>
        ) : (
          <OptionLink to="/signin">ANMELDEN</OptionLink>
        )}

        <OptionLink to="/contact">KONTAKT</OptionLink>

        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
}

/**
 * The state that is passed in here is thr RootReducer
 * that's why we have to access .user from the RootReducer
 * then from that property we get the userReducer and in there
 * we want the currentUser from the userReducer
 * [root-reducer].[reducer-selection].[reducer-propertyValue]
 * @param {*} state
 */
// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
// })
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

/**
 * connect is a HigherOrderComponent (HOC) it is a function
 * that takes in a component as an argument and returns a new component
 * source: https://reactjs.org/docs/higher-order-components.html
 *
 * In our sample we extend the Header Component and we export the
 * Header Component with that added functionality, instead of the
 * initial Header Component
 */
export default connect(mapStateToProps)(Header)
