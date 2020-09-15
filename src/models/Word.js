const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WordSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  language: {
    type: String,
    require: true
  }
}, {
  timestamps: true
});

exports.module = mongoose.model("word", WordSchema);