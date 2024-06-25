const {
  createOrder,
  getAllOrder,
  getSingleOrder,
  updateOrder,
  deleteOrder,
  showCurrentUserOrders,
} = require('../Controllers/orderController')

const express = require('express')
const AuthenticateUser = require('../Middleware/AuthorizeUser')
const AuthorizeUser = require('../Middleware/AuthorizeUser')
const router = express.Router()

router
  .route('/')
  .get(AuthenticateUser, AuthorizeUser('Admin'), getAllOrder)
  .post(AuthenticateUser, createOrder)

router.route('/currentUserOrders').get(AuthenticateUser, showCurrentUserOrders)

router
  .route('/:id')
  .get(AuthenticateUser, getSingleOrder)
  .patch(AuthenticateUser, updateOrder)
  .delete(AuthenticateUser, deleteOrder)

router.route
