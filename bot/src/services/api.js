const axios = require('axios').default;

module.exports = {
  gifs: axios.create({
    baseURL: 'https://walleapi.vercel.app/gifs',
  }),

  temperature: axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
  }),

  gpt: axios.create({
    baseURL: 'https://api.openai.com/v1',
    headers: {
      authorization: `Bearer ${process.env.OPENIA_KEY}`,
    },
  }),

  translate: axios.create({
    baseURL: 'https://api.nlpcloud.io/v1/nllb-200-3-3b',
    headers: {
      authorization: `Token ${process.env.NLP_KEY}`,
    },
  }),
};
