import axios from 'axios'

export const formatPrice = (price: number): string => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)

  return dollarsAmount
}

export const customFetch = axios.create({
  baseURL: 'https://ecommerce-project-2-2n0h.onrender.com/api/v1',
})
