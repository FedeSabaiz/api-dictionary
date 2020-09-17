const { getWord, getWords } = require("../../services/WordService");

const getOneWord = async (_, {id}) => {
  const word = await getWord(id);
  return word;
};

const getAllWords = async () => {
  const words = await getWords();
  return words;
};

module.exports = {
  getOneWord,
  getAllWords
};