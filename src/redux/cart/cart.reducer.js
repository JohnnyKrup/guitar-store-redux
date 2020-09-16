import { CartActionTypes } from "./cart.types"
import { addItemToCart, removeItemFromCart } from "./cart.util"

const INITAL_STATE = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // first add all existing items into the array
        // then add the current item in the array via action.payload
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      }

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        // .filter() returns the elements of an array that meet the condition of a specific callback
        // we get back all items, except the one that we want to remove
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      }

    default:
      return state
  }
}

export default cartReducer
