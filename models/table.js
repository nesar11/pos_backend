const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
const Table = new Schema({
  tableNumber: {
    type: Number
  },
  outlet: {
    type: String
  },
},{timestamps:true});

module.exports = mongoose.model('Table', Table);