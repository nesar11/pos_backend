const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
const Category = new Schema({
  catName: {
    type: String
  },
  image: {
    type: String
  },
},{timestamps:true});

module.exports = mongoose.model('Category', Category);