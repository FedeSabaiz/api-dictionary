const { getPoem, getPoems} = require("../../services/PoemService");

const getOnePoem = async (_, {id}) => {
  const poem = await getPoem(id);
  return poem
}

const getAllPoems = async () => {
  const poems = await getPoems();
  return poems;
}

module.exports = {
  getOnePoem,
  getAllPoems
}