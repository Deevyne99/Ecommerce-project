const customApiError = require('../Errors')
const Products = require('../Models/products')
const { StatusCodes } = require('http-status-codes')

const getAllProducts = async (req, res) => {
  const products = await Products.find({}).populate('reviews')
  res
    .status(StatusCodes.OK)
    .json({ success: true, products, count: products.length })
}

const createProducts = async (req, res) => {
  req.body.user = req.user.userId
  const product = await Products.create(req.body)
  res.status(StatusCodes.CREATED).json({ success: true, product })
}

const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params
  const product = await Products.findOne({ _id: productId }).populate('reviews')
  if (!product) {
    throw new customApiError.NotFoundError(
      `product with the id ${productId} does not exist`
    )
  }
  res.status(StatusCodes.OK).json({ success: true, product })
}

const updateProduct = async (req, res) => {
  const { id: productId } = req.params
  const product = await Products.findOneAndUpdate(
    { _id: productId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  )
  if (!product) {
    throw new customApiError.NotFoundError(
      `product with the id ${productId} does not exist`
    )
  }
  res.status(StatusCodes.OK).json({ success: true, product })
}

const deleteProduct = async (req, res) => {
  const { id: productId } = req.params
  const product = await Products.findOneAndDelete({ _id: productId })
  if (!product) {
    throw new customApiError.NotFoundError(
      `product with the id ${productId} does not exist`
    )
  }
  //  await product.remove()
  res.status(StatusCodes.OK).json({ success: true, product })
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProducts,
  updateProduct,
  deleteProduct,
}
