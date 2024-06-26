const CustomApiError = require('./CutomApiError')
const { StatusCodes } = require('http-status-codes')

class UnAuthorizedError extends CustomApiError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = UnAuthorizedError
