const customApiError = require('../Errors')
const Products = require('../Models/products')
const { StatusCodes } = require('http-status-codes')

const getAllProducts = async (req, res) => {
  res.status(StatusCodes.OK).json('Get All Products')
}

const createProducts = async (req, res) => {
  res.status(StatusCodes.CREATED).json('Create Product Route')
}

const getSingleProduct = async (req, res) => {
  res.status(StatusCodes.OK).json('Get Single Product Route')
}

const updateProduct = async (req, res) => {
  res.status(StatusCodes.OK).json('Updated Product Route')
}

const deleteProduct = async (req, res) => {
  res.status(StatusCodes.OK).json('Delete Product')
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProducts,
  updateProduct,
  deleteProduct,
}
