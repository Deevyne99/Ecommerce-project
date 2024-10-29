import { CardElement } from '@stripe/react-stripe-js'

const PaymentForm = () => {
  return (
    <div className='flex flex-col w-full gap-4'>
      <CardElement />
      <button className='bg-[#3b82f6] p-2 text-[#fff] capitalize mt-4'>
        pay{' '}
      </button>
    </div>
  )
}

export default PaymentForm
