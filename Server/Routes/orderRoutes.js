const express = require('express')
const AuthenticateUSer = require('../Middleware/AuthenticateUser')
const AuthorizeUser = require('../Middleware/AuthorizeUser')
const {
  createOrder,
  getAllOrders,
  getCurrentUserOrder,
  updateOrder,
  deleteOrder,
  getSingleOrder,
} = require('../Controllers/orderControllers')
const router = express.Router()

router
  .route('/')
  .post(AuthenticateUSer, createOrder)
  .get(AuthenticateUSer, AuthorizeUser('Admin'), getAllOrders)

router.route('/showCurrentUserOrder').get(AuthenticateUSer, getCurrentUserOrder)

router
  .route('/:id')
  .get(AuthenticateUSer, getSingleOrder)
  .patch(AuthenticateUSer, updateOrder)
  .delete(AuthenticateUSer, deleteOrder)

module.exports = router
