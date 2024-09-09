const customApiError = require('../Errors')
const Products = require('../Models/products')
const { StatusCodes } = require('http-status-codes')
const cloudinary = require('cloudinary').v2
const fs = require('fs')
const products = require('../Models/products')

const getAllProducts = async (req, res) => {
  const { search, category, price, sort } = req.query
  const queryObject = {}

  if (search) {
    queryObject.name = { $regex: search, $options: 'i' }
  }
  if (category && category !== 'all') {
    queryObject.category = category
  }
  if (price && price !== 0) {
    queryObject.price = price
  }
  let product = Products.find(queryObject).populate('reviews')
  if (sort === 'latest') {
    product = result.sort('-createdBt')
  }
  if (sort === 'oldest') {
    product = product.sort('createAt')
  }
  if (sort === 'a-z') {
    product = product.sort('a-z')
  }
  if (sort === 'z-a') {
    product = product.sort('z-a')
  }

  //setting up pagination
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page - 1) * limit

  product = product.skip(skip).limit(limit)

  const products = await product

  const totalProducts = await Products.countDocuments(queryObject)

  const numbOfPages = Math.ceil(totalProducts / limit)

  res
    .status(StatusCodes.OK)
    .json({ success: true, products, count: totalProducts, pages: numbOfPages })
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

const uploadImage = async (req, res) => {
  console.log(req.files)

  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'ecommerce-project',
    }
  )
  fs.unlinkSync(req.files.image.tempFilePath)
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } })
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProducts,
  updateProduct,
  deleteProduct,
  uploadImage,
}
