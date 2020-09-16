import React from "react"
import StripeCheckout from "react-stripe-checkout"

import Logo from "../../assets/LogoNoText_128.svg"

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    "pk_test_51HMEUpGwZJpWDm6OoB0Y2QbMy6oaOi0eVD1po1u3jZohjdHE4etIstV1cZe99qSUHSoMXhwQq7fNP7pIETflJJVK00SblHdgzR"

  const onToken = (token) => {
    console.log(token)
    alert("Zahlung war erfolgreich")
  }

  return (
    <StripeCheckout
      label="Jetzt Bezahlen"
      name="dieGitarre.ch"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Der Gesamtbetrag ist CHF ${price}`}
      amount={priceForStripe}
      panelLabel="Jetzt bezahlen"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
