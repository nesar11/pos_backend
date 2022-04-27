const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
const Outlet = new Schema({
  outletName: {
    type: String
  },
  address: {
    type: String
  },
  status: {
    type: String
  },
  table: {
    type: Number
  }
});

module.exports = mongoose.model('Outlet', Outlet);