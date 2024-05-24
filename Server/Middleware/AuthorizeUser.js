const { verifyToken } = require('../Utils')
const customApiError = require('../Errors')

const AuthorizeUser = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new customApiError.UnAuthorizedError(
        'Unauthorized to access this route'
      )
    }
    next()
  }
}
module.exports = AuthorizeUser
