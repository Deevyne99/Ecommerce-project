import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

interface PaymentComponentProps {
  amount: number // Define the type for 'amount' prop
}

const PaymentComponent: React.FC<PaymentComponentProps> = ({ amount }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const cardElement = elements.getElement(CardElement)
    if (!cardElement) {
      setError('Card element not found.')
      return
    }

    try {
      const { token, error: stripeError } = await stripe.createToken(
        cardElement
      )

      if (stripeError) {
        setError(stripeError.message || 'Something went wrong')
        return
      }

      const response = await fetch('/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100, // Amount in cents
          token: token?.id, // Send only the token ID
        }),
      })

      if (response.ok) {
        console.log('Payment Successful!')
      } else {
        setError('Payment failed. Please try again.')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type='submit' disabled={!stripe}>
        Pay ${amount}
      </button>
      {error && <div>{error}</div>}
    </form>
  )
}

export default PaymentComponent
