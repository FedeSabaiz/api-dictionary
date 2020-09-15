const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  first_Last_name: {
    type: String,
    required: true
  },
  second_last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("admin", AdminSchema);