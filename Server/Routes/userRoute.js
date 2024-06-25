const express = require('express')
const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  deleteUser,
} = require('../Controllers/userController')
const AuthenticateUSer = require('../Middleware/AuthenticateUser')
const AuthorizeUser = require('../Middleware/AuthorizeUser')
const router = express.Router()

router.route('/').get(AuthenticateUSer, AuthorizeUser('Admin'), getAllUsers)

router.route('/showMe').get(AuthenticateUSer, showCurrentUser)
router.route('/updateUser').patch(AuthenticateUSer, updateUser)
router
  .route('/:id')
  .get(AuthenticateUSer, getSingleUser)
  .delete(AuthenticateUSer, AuthorizeUser('Admin'), deleteUser)

module.exports = router
