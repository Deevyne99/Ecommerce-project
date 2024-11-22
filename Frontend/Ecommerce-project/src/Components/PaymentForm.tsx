import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { toast } from 'react-toastify'
import { clearCart } from '../features/cart/cartslice'
import { useNavigate } from 'react-router-dom'

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { clientSecret } = useAppSelector((state) => state.orderSlice)
  const { userProfile } = useAppSelector((state) => state.userSlice)

  const handlePayment = async () => {
    if (!stripe || !elements) {
      console.error('Stripe or Elements not loaded')
      return
    }

    if (!clientSecret) {
      console.error('Client secret is missing')
      return
    }

    try {
      const cardElement = elements.getElement(CardElement)

      if (!cardElement) {
        console.error('CardElement not found')
        return
      }

      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: userProfile.user,
            },
          },
        }
      )

      if (error) {
        console.error('Payment failed:', error.message)
        alert(`Payment failed: ${error.message}`)
        return
      }

      if (paymentIntent) {
        console.log('Payment successful:', paymentIntent)
        toast('Payment successful')
        navigate('/')
        dispatch(clearCart())

        // Perform additional actions, e.g., update the backend or UI
      }
    } catch (err) {
      console.error('An error occurred during payment confirmation:', err)
      alert('An unexpected error occurred. Please try again.')
    }
  }

  return (
    <div className='flex flex-col w-full gap-4'>
      <CardElement />
      <button
        onClick={() => handlePayment()}
        className='bg-[#3b82f6] p-2 text-[#fff] capitalize mt-4'
      >
        pay{' '}
      </button>
    </div>
  )
}

export default PaymentForm
