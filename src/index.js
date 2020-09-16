import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { store, persistor } from "./redux/store"

import "./index.css"
import App from "./App"

/**
 * the <Provider> wraps the whole application,
 * it needs to in order to be able to pass information
 * to every component in the project
 */
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
)

/**
 * <Link to="/tours" > in case we don't want a <Link> but a <Button>
 * we can use the "props.history.push('/tours')" to achieve the same
 * this gives us more flexibility
 *
 * 3 Main properties to look for when working with rect-router
 * => history
 * => location
 * => match
 *
 * match.url gives us the possibility for dynamic routing, without the need
 * to know the full url path
 * we can just extend it i.e. `${props.match.url}/21`
 */
