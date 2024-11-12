const customApiErrors = require('../Errors')
const { StatusCodes } = require('http-status-codes')
const Products = require('../Models/products')
const Order = require('../Models/Order')
const { checkPermission } = require('../Utils/')
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET)

const fakeStripeAPI = async ({ amount, currency }) => {
  const client_secret = 'someRandomValue'
  return { client_secret, amount }
}

const calculateTotal = ({ subTotal, shippingFee }) => {
  const tax = 0.1 * subTotal
  const total = tax + subTotal + parseInt(shippingFee)

  return total
}

const createOrder = async (req, res) => {
  const { items: cartItems, shipping: shippingFee, userId } = req.body
  console.log(cartItems)

  if (!cartItems || cartItems.length < 1) {
    throw new customApiErrors.BadRequestError('No cart items Provided')
  }
  if (!shippingFee) {
    throw new customApiErrors.BadRequestError('Please provide  shipping Fee')
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
    subtotal += item.amount * parseInt(price)
  }

  // calculate total

  const total = calculateTotal({ subTotal: subtotal, shippingFee })
  // get client secret
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  })

  const order = await Order.create({
    orderItems,
    total,
    subtotal,
    shippingFee,
    clientSecret: paymentIntent.client_secret,
    paymentIntentId: paymentIntent.id,
    user: userId,
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
