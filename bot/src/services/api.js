const axios = require('axios').default;

module.exports = {
  gifs: axios.create({
    baseURL: 'https://walleapi.vercel.app/gifs',
  }),

  temperature: axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
  }),
};
