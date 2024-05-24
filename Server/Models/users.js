const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter your First name'],
    minlength: 3,
    maxlength: 10,
  },
  lastName: {
    type: String,
    required: [true, 'Please enter your Last name'],
    minlength: 3,
    maxlength: 10,
  },
  email: {
    type: String,
    required: [true, 'Please provide your Email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please enter a valid email',
    },
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['Admin', 'User', 'Vendor'],
    default: 'User',
  },
})

UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password)
  return isMatch
}
module.exports = mongoose.model('user', UserSchema)
