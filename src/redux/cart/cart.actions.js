import { CartActionTypes } from "./cart.types"

/**
 * payload is an optional property and since
 * we are not making use of it, we don't have to pass anything in to our
 * toggleCartHidden function
 */
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
})

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
})

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
})
