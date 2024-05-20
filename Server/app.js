require('dotenv').config()
require('express-async-errors')
const express = require('express')
const connectDB = require('./Database/connectDB')
const userRoute = require('./Routes/userRoute')

const app = express()

//+++++++++++++++++++++++++++++++Middleware++++++++++++++++++++++++++++++++++++++++
app.use(express.json())

const port = 3000

//++++++++++++++++++++++++++++++ Routes ++++++++++++++++++++++++++++++++++++++++++++

app.use('/api/v1/users', userRoute)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`server is listening on Port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
