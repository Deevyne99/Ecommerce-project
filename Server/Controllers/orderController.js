const Orders = require('../Models/Order')
const { StatusCodes } = require('http-status-codes')

const createOrder = async (req, res) => {
  res.status(StatusCodes.CREATED).json('Create order')
}

const getAllOrder = async (req, res) => {
  res.status(StatusCodes.OK).json('Get All orders')
}

const updateOrder = async (req, res) => {
  res.status(StatusCodes.OK).json('update all orders')
}

const getSingleOrder = async (req, res) => {
  res.status(StatusCodes.OK).json('get single order')
}

const showCurrentUserOrders = async (req, res) => {
  res.status(StatusCodes.OK).json('show Current User Orders ')
}

const deleteOrder = async (req, res) => {
  res.status(StatusCodes.OK).json('delete order')
}

module.exports = {
  createOrder,
  getAllOrder,
  getSingleOrder,
  updateOrder,
  deleteOrder,
  showCurrentUserOrders,
}
