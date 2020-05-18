import React from 'react'
import './stripe-button.styles.scss'
import { connect } from 'react-redux'

import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
    const stripePrice = price * 100
    const publishableKey = 'pk_test_4EJpIwKIsEt8lmQ9PktBUpLa00M9zvUcp9'

    const onToken = token => {
        console.log('Stripe token: ', token)
    }

    return (
        <StripeCheckout
            name="Crwn Clothing Ltd."
            description={`Your total is £${price}`}
            billingAddress
            shippingAddress
            panelLabel="Pay Now"
            stripeKey={publishableKey}
            token={onToken}
        />
    )
}

export default StripeButton