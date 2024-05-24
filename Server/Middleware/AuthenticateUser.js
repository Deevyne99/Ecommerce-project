const { verifyToken } = require('../Utils')
const customApiError = require('../Errors')

const AuthenticateUSer = (req, res, next) => {
  const token = req.signedCookies.token
  if (!token) {
    throw new customApiError.UnAuthenticatedError('Unauthenticated User')
  }

  try {
    const { user, userId, role } = verifyToken({ token })
    req.user = { user, userId, role }
    next()
  } catch (error) {
    console.log(error)
  }
}

module.exports = AuthenticateUSer
