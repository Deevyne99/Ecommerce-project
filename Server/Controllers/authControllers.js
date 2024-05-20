const { StatusCodes } = require('http-status-codes')
const customApiError = require('../Errors')
const User = require('../Models/users')

const registerUser = async (req, res) => {
  const {} = req.body
  res.status(StatusCodes.OK).json('register route')
}

const loginUser = async (req, res) => {
  res.status(StatusCodes.OK).json('register route')
}

const logoutUser = async (req, res) => {
  res.status(StatusCodes.OK).json('logout user')
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
}
