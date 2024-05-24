const createTokenUser = (user) => {
  return { user: user.email, userId: user._id, role: user.role }
}

module.exports = createTokenUser
