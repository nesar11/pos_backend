const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
const Product = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  pImage: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  },
},{timestamps:true});

module.exports = mongoose.model('Product', Product);