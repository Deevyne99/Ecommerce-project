require('dotenv').config()
require('express-async-errors')
const express = require('express')
const connectDB = require('./Database/connectDB')
const userRoute = require('./Routes/userRoute')
const authRoute = require('./Routes/authRoutes')
const productRoute = require('./Routes/productRoutes')
const reviewsRoute = require('./Routes/reviewRoute')
const orderRoute = require('./Routes/orderRoutes')
const errorHandlerMiddleware = require('./Middleware/errorHandler')
const cookieParser = require('cookie-parser')
const notFound = require('./Middleware/notFound')
const fileUpload = require('express-fileupload')
const cloudinary = require('cloudinary').v2
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  api_key: process.env.CLOUDINARY_API_KEY,
})

const app = express()

//+++++++++++++++++++++++++++++++Middleware++++++++++++++++++++++++++++++++++++++++
app.use(helmet())
app.use(
  cors({
    credentials: true,
  })
)
app.use(xss())

app.set('trust proxy', 1)
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
)
app.use(express.json())
app.use(cookieParser(process.env.JWT_LIFETIME))
app.use(express.static('./public'))
app.use(fileUpload({ useTempFiles: true }))

const port = process.env.PORT || 5000

//++++++++++++++++++++++++++++++ Routes ++++++++++++++++++++++++++++++++++++++++++++

app.use('/api/v1/ecommerce/auth', authRoute)
app.use('/api/v1/ecommerce/users', userRoute)
app.use('/api/v1/ecommerce/products', productRoute)
app.use('/api/v1/ecommerce/reviews', reviewsRoute)
app.use('/api/v1/ecommerce/orders', orderRoute)

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
