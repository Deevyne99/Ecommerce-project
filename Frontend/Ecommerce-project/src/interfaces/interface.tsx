interface CartProps {
  id: string | number
  image: string
  price: number
  name: string
  description: string
  quantity: number
}

export interface DefaultStateProps {
  cartItems: CartProps[]
  numOfItemsInCart: number
  cartTotal: number
  shipping: number
  tax: 0
  orderTotal: number
}
