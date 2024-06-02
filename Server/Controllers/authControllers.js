const { StatusCodes } = require('http-status-codes')
const customApiError = require('../Errors')
const User = require('../Models/users')
const { attachCookiesToResponse, createTokenUser } = require('../Utils')

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body
  const emailExist = await User.findOne({ email })
  if (emailExist) {
    throw new customApiError.BadRequestError('Email already Exist')
  }
  const isFirstAccount = (await User.countDocuments({})) === 0
  const role = isFirstAccount ? 'Admin' : 'User'
  const user = await User.create({ firstName, lastName, email, password, role })
  const tokenUser = createTokenUser(user)
  attachCookiesToResponse({ res, user: tokenUser })

  res.status(StatusCodes.CREATED).json({ success: true, tokenUser })
}

const loginUser = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new customApiError.BadRequestError(
      'Please enter your email and password'
    )
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new customApiError.UnAuthenticatedError('Invalid Credentials')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new customApiError.UnAuthenticatedError('Invalid Credentials')
  }
  const tokenUser = createTokenUser(user)
  attachCookiesToResponse({ res, user: tokenUser })
  res.status(StatusCodes.OK).json({ success: true, tokenUser })
}

const logoutUser = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnlyTrue: true,
    expires: new Date(Date.now()),
  })
  res
    .status(StatusCodes.OK)
    .json({ success: true, message: 'Logout successfuly' })
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
}
