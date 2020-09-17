const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WordSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  traduction: {
    type: String,
    required: true
  },
  is_active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("word", WordSchema);