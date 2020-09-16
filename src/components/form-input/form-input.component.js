import React from "react"
import "./form-input.styles.scss"

/**
 * Because we use functions & variables in our .scss
 * and I have not yet figured out how to use them in styled-copmponents
 * I will use the import of the .scss file
 *
 * Why are we making a component out of this input field?
 * We want to reuse the same type of input fields not only in our
 * sign-in form but also in the sign-up form, that's why we want to go with
 * flexible independent components, that can be reused in various places.
 *
 * @param {*} param0
 */
const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  )
}

export default FormInput
