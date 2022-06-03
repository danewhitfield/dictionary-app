const axios = require("axios");

let config = {
  headers: {
    API_KEY: "5f263f21889ef42b5203bedd80ab1bb3de3d48c61dbff24a0ca3d99b8758d064",
  },
};

const dictionary = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en",
});

export const getWord = (word) => {
  return dictionary.get(`/${word}`).then(({ data }) => data);
};

const images = axios.create({
  baseURL: `https://serpapi.com/playground?q=`,
});

export const getImage = (word) => {
  return images.get(`${word}&tbm=isch&ijn=0`, config).then((res) => res);
  // .then((res) => res.images_results[0]);
};
