import mongoose, { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: true,
    trim: true,
    maxlength: [40, "Title must be less than 40 characters"],
  },
  brand: {
    type: String,
    required: [true, "Brand is required"],
    trim: true,
    maxlength: [20, "Brand must be less than 20 characters"]
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: [200, "Description must be less than 200 characters"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    trim: true
  },
  stock: {
    type: Number,
    required: [true, "Please enter the product quantity"],
    trim: true
  },
  category: {
    type: String,
    required: [true, "Please enter a category"],
    trim: true,
    maxlength: [20, 'The category must be less than 20 characters']
  },
  images: {
    type: Array,
    required: true,
    trim: true
  }
}, {
  timestamps: true,
  versionKey: false,
})

mongoose.set('strictQuery', true)

export default models.Product || model('Product', productSchema)