import React from "react"

import { CustomButtonContainer } from "./custom-button-styles"

/**
 * Why do we create a button, when we need a <input type="submit" />?
 * both <button> and <input> have the property type=""
 * the type="" will be passed through as the ...otherProps
 */
const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
)

export default CustomButton
