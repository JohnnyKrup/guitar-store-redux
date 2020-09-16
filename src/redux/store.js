import { createStore, applyMiddleware } from "redux"
import { persistStore } from "redux-persist"
import logger from "redux-logger"

import rootReducer from "./root-reducer"

/**
 * for more information: https://redux.js.org/
 */
const middlewares = []

// this allows to write redux logger messages in the console
// only in dev builds, not in production
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger)
}

/**
 * create a redux-store, apply a middleware
 * and spread all properties of the [logger] array from the redux-logger
 * (the logger helps us debugging)
 * we could have written also:
 * const store = createStore(rootReducer, applyMiddleware(logger)
 * applyMiddleware will accept all possible middleWares
 */
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

export default { store, persistor }
