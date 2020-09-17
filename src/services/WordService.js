const { Words } = require("../models");

const createWord = (data) => Words.create(data);

const updateWord = (id, data) => Words.findByIdAndUpdate({
  _id: id,
  is_active: true
}, {
  ...data
}, {
  new: true
});

const deleteWord = (id) => Words.findByIdAndUpdate({
  _id: id,
  is_active: true
}, {
  is_active: false
});

const getWord = (id) => Words.findById({
  _id: id,
  is_active: true
});

const getWords = () => Words.find({
  is_active: true
});

module.exports = {
  createWord,
  updateWord,
  deleteWord,
  getWord,
  getWords
};