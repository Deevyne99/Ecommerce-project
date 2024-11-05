import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import SingleProduct from './Pages/SingleProduct'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ForgotPassword from './Pages/ForgotPassword'
import Order from './Pages/Order'
import Checkout from './Pages/Checkout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoutes from './utils/ProtectedRoute'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './utils/stripeUtils'

// import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />

            <Route
              path='/orders'
              element={
                <ProtectedRoutes>
                  <Order />
                </ProtectedRoutes>
              }
            />

            <Route
              path='/checkout'
              element={
                <ProtectedRoutes>
                  <Elements stripe={stripePromise}>
                    <Checkout />
                  </Elements>
                </ProtectedRoutes>
              }
            />

            <Route path='/product/:id' element={<SingleProduct />} />
          </Route>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  )
}

export default App
