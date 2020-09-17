const {createWord, updateWord, deleteWord} = require("../../services/WordService");

const createNewWord = async (_, {data}) => {
  const word = await createWord(data);
  return word;
};

const updateNewWord = async (_, {id, data}) => {
  const word = await updateWord(id, data);
  return word;
}

const deleteOneWord = async (_, {id}) => {
  const word = await deleteWord(id);
  return word;
}

module.exports = {
  createNewWord,
  updateNewWord,
  deleteOneWord
}