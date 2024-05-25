const express = require('express')
const {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
} = require('../Controllers/reviewControllers')
const AuthenticateUser = require('../Middleware/AuthenticateUser')

const router = express.Router()

router.route('/').post(AuthenticateUser, createReview).get(getAllReviews)
router
  .route('/:id')
  .get(getSingleReview)
  .patch(AuthenticateUser, updateReview)
  .delete(AuthenticateUser, deleteReview)

module.exports = router
