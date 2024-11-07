const jwt = require('jsonwebtoken')

const createJwt = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })

  return token
}

const verifyToken = ({ token }) => jwt.verify(token, process.env.JWT_SECRET)

const attachCookiesToResponse = ({ res, user }) => {
  const token = createJwt({ payload: user })
  const oneDay = 1000 * 60 * 60 * 24

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    sameSite: 'Lax',
    domain: 'ecommerce-project-2-2n0h.onrender.com',
  })
}

module.exports = {
  verifyToken,
  attachCookiesToResponse,
  createJwt,
}
