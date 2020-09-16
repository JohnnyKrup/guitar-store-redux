import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
// this gives us the actual localStorage from the Window object
import storage from "redux-persist/lib/storage"

import userReducer from "./user/user.reducer"
import cartReducer from "./cart/cart.reducer"
import directoryReducer from "./directory/directory.reducer"
import shopReducer from "./shop/shop.reducer"

const persistConfig = {
  // where we want to start to store data
  // in our case from the root
  key: "root",
  // this is equal to storage: storage
  // variable storage is whatever we imported from the storage in the imports
  storage,
  // an array of string names of which reducers should be persisted
  // only the cart, as the user is stored in fireBase
  whitelist: ["cart"],
}

/**
 * This root reducer will combine all the code
 * of all reducers in this project
 */
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
})

export default persistReducer(persistConfig, rootReducer)
