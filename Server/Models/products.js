const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
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
      enum: ['shoes', 'shirts', 'bags', 'trousers', 'caps', 'jackets'],
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
    averageRating: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

ProductSchema.virtual('reviews', {
  ref: 'Reviews',
  localField: '_id',
  foreignField: 'product',
  justOne: false,
})

ProductSchema.pre('findOneAndDelete', async function (next) {
  const product = await this.model.findOne(this.getFilter())
  if (product) {
    await mongoose.model('Reviews').deleteMany({ product: product._id })
  }
})

module.exports = mongoose.model('Products', ProductSchema)
