const CustomApiError = require('./CutomApiError')
const { StatusCodes } = require('http-status-codes')

class UnAuthenticatedError extends CustomApiError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.FORBIDDEN
  }
}

module.exports = UnAuthenticatedError
