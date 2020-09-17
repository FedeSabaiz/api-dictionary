const { createPoem, updatePoem, deletePoem } = require("../../services/PoemService");

const createNewPoem = async (_, {data}) => {
  const poem = await createPoem(data);
  return poem
}

const updateOnePoem = async (_, {id, data}) => {
  const poem = await updatePoem(id, data);
  return poem;
}

const deleteOnePoem = async (_, {id}) => {
  const poem = await deletePoem(id);
  return poem;
}

module.exports = {
  createNewPoem,
  updateOnePoem,
  deleteOnePoem
}