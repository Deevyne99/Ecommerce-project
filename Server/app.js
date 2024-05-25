require('dotenv').config()
require('express-async-errors')
const express = require('express')
const connectDB = require('./Database/connectDB')
const userRoute = require('./Routes/userRoute')
const authRoute = require('./Routes/authRoutes')
const productRoute = require('./Routes/productRoutes')
const reviewsRoute = require('./Routes/reviewRoute')
const errorHandlerMiddleware = require('./Middleware/errorHandler')
const cookieParser = require('cookie-parser')
const notFound = require('./Middleware/notFound')

const app = express()

//+++++++++++++++++++++++++++++++Middleware++++++++++++++++++++++++++++++++++++++++
app.use(express.json())
app.use(cookieParser(process.env.JWT_LIFETIME))

const port = 5000

//++++++++++++++++++++++++++++++ Routes ++++++++++++++++++++++++++++++++++++++++++++

app.use('/api/v1/ecommerce/auth', authRoute)
app.use('/api/v1/ecommerce/users', userRoute)
app.use('/api/v1/ecommerce/products', productRoute)
app.use('/api/v1/ecommerce/reviews', reviewsRoute)

app.use(errorHandlerMiddleware)
app.use(notFound)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`server is listening on Port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
