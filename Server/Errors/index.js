const CustomApiError = require('./CutomApiError')
const UnAuthenticatedError = require('./UnAuthencatedError')
const BadRequestError = require('./badRequest')
const NotFoundError = require('./notFoundError')
const UnAuthorizedError = require('./unAuthorized')

module.exports = {
  CustomApiError,
  UnAuthenticatedError,
  BadRequestError,
  NotFoundError,
  UnAuthorizedError,
}
