require('dotenv').config()
const Products = require('./Models/products')
const mockData = require('./mock-data.json')
const connectDB = require('./Database/connectDB')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await Products.create(mockData)
    console.log('Success')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
