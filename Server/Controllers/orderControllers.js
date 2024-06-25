const customApiErrors = require('../Errors')
const { StatusCodes } = require('http-status-codes')

const createOrder = async (req, res) => {
  const { items: cartItems, tax, shippingFee } = req.body

  if (!cartItems || cartItems.length < 1) {
    throw new customApiErrors.BadRequestError('No cart items Provided')
  }
  if (!tax || shippingFee) {
    throw new customApiErrors.BadRequestError(
      'Please provide tax and shipping Fee'
    )
  }

  let orderItems = []
}

const getAllOrders = async (req, res) => {
  res.send('get all orders')
}

const getSingleOrder = async (req, res) => {
  res.send('get single order')
}

const deleteOrder = async (req, res) => {
  res.send('Delete Order')
}

const updateOrder = async (req, res) => {
  res.send('update order')
}

const getCurrentUserOrder = async (req, res) => {
  res.send('get current user order')
}

module.exports = {
  createOrder,
  getAllOrders,
  getCurrentUserOrder,
  updateOrder,
  deleteOrder,
  getSingleOrder,
}
