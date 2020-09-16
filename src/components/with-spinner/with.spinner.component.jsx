import React from "react"

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles"

/**
 * We create a new HOC the WithSpinner Component
 * it is a function that takes a component as an argument
 * The WrappedComponent gets passed into this component
 *
 * If isLoading === true display the spinner css animation
 * If isLoading === false, display the component that was passed in
 * @param {*} WrappedComponent
 */
// const WithSpinner = (WrappedComponent) => ({isLoading, ...otherProps}) {
//   return  isLoading ? (
//     <SpinnerOverlay>
//       <SpinnerContainer />
//     </SpinnerOverlay>
//   ) : (
//     <WrappedComponent {...otherProps} />
//   )
// }

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    )
  }
  return Spinner
}

export default WithSpinner
