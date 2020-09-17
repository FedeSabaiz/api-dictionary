const {Poems} = require("../models");

const createPoem = (data) => {
  return  Poems.create(data)
};

const updatePoem = (id, data) => {
  return Poems.findByIdAndUpdate({
    _id: id,
    is_active: true
  }, {
    ...data
  }, {
    new: true
  })
}

const deletePoem = (id) => Poems.findByIdAndUpdate({
    _id: id,
    is_active: true
  }, {
    is_active: false
  });

const getPoem = (id) => Poems.findById({
  _id: id
});

const getPoems = () =>Poems.find({
  is_active: true
});

module.exports = {
  createPoem,
  updatePoem,
  deletePoem,
  getPoem,
  getPoems
}