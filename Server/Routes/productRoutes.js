const express = require('express')
const {
  getAllProducts,
  getSingleProduct,
  createProducts,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require('../Controllers/productControllers')
const AuthenticateUser = require('../Middleware/AuthenticateUser')
const router = express.Router()

router.route('/').post(AuthenticateUser, createProducts).get(getAllProducts)

router.route('/uploadImage').post(AuthenticateUser, uploadImage)

router
  .route('/:id')
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct)

module.exports = router
