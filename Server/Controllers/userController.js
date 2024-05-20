const customApiError = require('../Errors')
const { StatusCodes } = require('http-status-codes')
const getAllUsers = async (req, res) => {
  res.status(StatusCodes.OK).json('Get all user Routes')
}

module.exports = { getAllUsers }
