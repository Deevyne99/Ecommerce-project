const customApiErrors = require('../Errors')
const { StatusCodes } = require('http-status-codes')
const Products = require('../Models/products')
const Order = require('../Models/Order')
const { checkPermission } = require('../Utils/')

const fakeStripeAPI = async ({ amount, currency }) => {
  const client_secret = 'someRandomValue'
  return { client_secret, amount }
}

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
  let subtotal = 0
  for (const item of cartItems) {
    const dBProducts = await Products.findOne({ _id: item.product })
    if (!dBProducts) {
      throw new customApiErrors.NotFoundError(
        `No product with id : ${item.product}`
      )
    }

    const { name, price, image, _id } = dBProducts
    const singleOrderitem = { amount: item.amount, name, price, image, _id }
    //add item to orderItem array
    orderItems = [...orderItems, singleOrderitem]
    subtotal = item.amount * price
  }

  // calculate total
  const total = tax + shippingFee + subtotal
  // get client secret
  const paymentIntent = await fakeStripeAPI({
    amount: total,
    currency: 'usd',
  })

  const order = await Order.create({
    orderItems,
    total,
    subtotal,
    tax,
    shippingFee,
    clientSecret: paymentIntent.client_secret,
    user: req.user.userId,
  })

  res
    .status(StatusCodes.CREATED)
    .json({ order, clientSecret: order.clientSecret })
}

const getAllOrders = async (req, res) => {
  const orders = await Order.find({})
  res
    .status(StatusCodes.OK)
    .json({ success: true, orders, count: orders.length })
}

const getSingleOrder = async (req, res) => {
  const { id: orderId } = req.params
  const order = await Order.findOne({ _id: orderId })
  if (!order) {
    throw new customApiErrors.NotFoundError(`No order with id : ${orderId}`)
  }
  checkPermission(req.user, order.user)

  res.status(StatusCodes.OK).json({ success: true, order })
}

const deleteOrder = async (req, res) => {
  res.send('Delete Order')
}

const updateOrder = async (req, res) => {
  res.send('update order')
}

const getCurrentUserOrder = async (req, res) => {
  const orders = await Order.find({ user: req.user })
  res.status(StatusCodes.OK).json({ success: true, orders })
}

module.exports = {
  createOrder,
  getAllOrders,
  getCurrentUserOrder,
  updateOrder,
  deleteOrder,
  getSingleOrder,
}
