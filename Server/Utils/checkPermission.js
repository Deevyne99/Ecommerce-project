const customApiError = require('../Errors')
const checkPermission = (reqUser, reqUserId) => {
  console.log(reqUser, reqUserId)
  if (reqUser.role === 'Admin') return
  if (reqUser.userId === reqUserId.toString()) return
  throw new customApiError.UnAuthorizedError(
    'You are not Authorized to access this route'
  )
}

module.exports = checkPermission
