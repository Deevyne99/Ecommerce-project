require('dotenv').config()
require('express-async-errors')
const express = require('express')
const connectDB = require('./Database/connectDB')
const userRoute = require('./Routes/userRoute')
const authRoute = require('./Routes/authRoutes')
const errorHandlerMiddleware = require('./Middleware/errorHandler')
const cookieParser = require('cookie-parser')

const app = express()

//+++++++++++++++++++++++++++++++Middleware++++++++++++++++++++++++++++++++++++++++
app.use(express.json())
app.use(cookieParser(process.env.JWT_LIFETIME))

const port = 5000

//++++++++++++++++++++++++++++++ Routes ++++++++++++++++++++++++++++++++++++++++++++

app.use('/api/v1/ecommerce/auth', authRoute)
app.use('/api/v1/ecommerce/users', userRoute)

app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`server is listening on Port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
