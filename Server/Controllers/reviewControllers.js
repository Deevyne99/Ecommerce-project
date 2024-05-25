const Reviews = require('../Models/Reviews')
const customApiError = require('../Errors')
const { StatusCodes } = require('http-status-codes')
const Products = require('../Models/products')

const createReview = async (req, res) => {
  const { product: productId } = req.body
  const validProduct = await Products.findOne({ _id: productId })
  if (!validProduct) {
    throw new customApiError.NotFoundError(
      `No product with the id ${productId}`
    )
  }

  const alreadySubmitted = await Reviews.findOne({
    product: productId,
    user: req.user.userId,
  })
  if (alreadySubmitted) {
    throw new customApiError.BadRequestError(
      'Already submitted review for this product'
    )
  }
  req.body.user = req.user.userId

  const review = await Reviews.create(req.body)

  res.status(StatusCodes.CREATED).json({ success: true, review })
}

const getAllReviews = async (req, res) => {
  const reviews = await Reviews.find({}).populate({
    path: 'product',
    select: 'name',
  })
  res.status(StatusCodes.OK).json({ reviews })
}

const getSingleReview = async (req, res) => {
  res.status(StatusCodes.OK).json('Get single Review')
}

const updateReview = async (req, res) => {
  res.status(StatusCodes.OK).json('Update review')
}

const deleteReview = async (req, res) => {
  res.status(StatusCodes.OK).json('delete Review')
}

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
}
