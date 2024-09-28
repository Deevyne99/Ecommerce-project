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

// {
//             "_id": "66f71b86b73b6e77e57cc05e",
//             "name": "New Balance Ladies white",
//             "price": 4000,
//             "description": "Relaxed fit shoe made of good quality material, they are light and comfortable. They come in two different colors ",
//             "image": "https://res.cloudinary.com/dbm6niakh/image/upload/v1727290317/ecommerce-project/eaed4fe318369037f9c55defb6c666eb_ejxpyu.jpg",
//             "images": [
//                 "https://res.cloudinary.com/dbm6niakh/image/upload/v1727290203/ecommerce-project/41024040e6e96b24a4dc22eab9891fbd_inkk37.jpg",
//                 "https://res.cloudinary.com/dbm6niakh/image/upload/v1727290184/ecommerce-project/5048d49c9d42cb1542d75229aace5060_vsiagl.jpg",
//                 "https://res.cloudinary.com/dbm6niakh/image/upload/v1727290157/ecommerce-project/50e604e16a7028b3f70192d7940a628d_tkxwzi.jpg",
//                 "https://res.cloudinary.com/dbm6niakh/image/upload/v1727290097/ecommerce-project/3cc7b527d1b70049226a5f8becbc0d7a_rox574.jpg"
//             ],
//             "category": "shoes",
//             "colors": [
//                 "#222"
//             ],
//             "freeShipping": false,
//             "inventory": 8,
//             "averageRating": 0,
//             "numOfReviews": 0,
//             "user": "665ca480fbaef37c0695a56e",
//             "createdAt": "2024-09-27T20:54:30.925Z",
//             "updatedAt": "2024-09-27T20:54:30.925Z",
//             "__v": 0,
//             "reviews": [],
//             "id": "66f71b86b73b6e77e57cc05e"
//         }

export interface ProductProps {
  id: string
  name: string
  price: number
  description: string
  image: string
  images: string[]
  category: string
  colors: string[]
  freeShipping: boolean
  inventory: number
  averageRating: number
  numOfReviews: number
  user: string
}

export interface ProductsProps {
  products: ProductProps[]
  error: boolean
  loading: boolean
}
