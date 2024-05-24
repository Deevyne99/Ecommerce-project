const express = require('express')
const {
  getAllProducts,
  getSingleProduct,
  createProducts,
  updateProduct,
  deleteProduct,
} = require('../Controllers/productControllers')
const router = express.Router()

router.route('/').post(createProducts).get(getAllProducts)

router
  .route('/:id')
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct)

module.exports = router
