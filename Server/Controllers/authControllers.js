const { StatusCodes } = require('http-status-codes')
const customApiError = require('../Errors')
const User = require('../Models/users')

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body
  const emailExist = await User.findOne({ email })
  if (emailExist) {
    throw new customApiError.BadRequestError('Email already Exist')
  }
  const user = await User.create({ firstName, lastName, email, password })

  res.status(StatusCodes.CREATED).json({ success: true, user })
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
