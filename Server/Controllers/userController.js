const customApiError = require('../Errors')
const { StatusCodes } = require('http-status-codes')
const User = require('../Models/users')
const {
  checkPermission,
  createTokenUser,
  attachCookiesToResponse,
} = require('../Utils')

const getAllUsers = async (req, res) => {
  const users = await User.find({})

  res.status(StatusCodes.OK).json({ success: true, users })
}

const getSingleUser = async (req, res) => {
  const { id: userId } = req.params
  const user = await User.findOne({ _id: userId })
  if (!user) {
    throw new customApiError.NotFoundError(`No user with the id ${userId}`)
  }

  checkPermission(req.user, user._id)

  res.status(StatusCodes.OK).json({ success: true, user })
}

const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, user: req.user })
}

const updateUser = async (req, res) => {
  const { id: userId } = req.params
  const { firstName, lastName, email } = req.body
  if (!firstName || !lastName || !email) {
    throw new customApiError.BadRequestError('Please Enter your credentials')
  }
  const user = await User.findOne({ _id: userId })
  if (!user) {
    throw new customApiError.NotFoundError(`No user with the id ${userId}`)
  }
  ;(user.firstName = firstName),
    (user.lastName = lastName),
    (user.email = email)
  await user.save()

  const tokenUser = createTokenUser(user)
  attachCookiesToResponse({ res, user: tokenUser })
  res.status(StatusCodes.OK).json({ sucess: true, tokenUser })
}

module.exports = { getAllUsers, getSingleUser, showCurrentUser, updateUser }
