const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please provide product name'],
    maxlength: [100, 'Name can not be more than 100 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide product price'],
    default: 0,
  },
  description: {
    type: String,
    required: [true, 'Please provide product description'],
    maxlength: [1000, 'Description can not be more than 1000 characters'],
  },
  image: {
    type: String,
    default: 'image',
  },
  images: {
    type: [String],
  },
  category: {
    type: String,
    required: [true, 'Please provide product category'],
    enum: [
      'shoes',
      'shirts',
      'bags',
      'trousers',
      'glasses',
      'perfumes',
      'short',
    ],
  },
  colors: {
    type: [String],
    default: ['#222'],
    required: true,
  },
  freeShipping: {
    type: Boolean,
    default: false,
  },
  inventory: {
    type: Number,
    required: true,
    default: 15,
  },
})

module.exports = mongoose.model('Products', ProductSchema)
