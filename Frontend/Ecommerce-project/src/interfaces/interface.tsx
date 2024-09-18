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

export interface UserProps {
  user: string
  role: string
  userId: string
}

export interface LoginUserProps {
  email: string
  password: string
}
export interface IntialStateProps {
  userProfile: UserProps
  isError: boolean
  isLoading: boolean
}

export interface RegisterUserProps {
  name: string
  email: string
  password: string
}
