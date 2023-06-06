const axios = require("axios").default;

const instace = axios.create({
  baseURL: " https://walleapi.vercel.app/gifs/"
})

module.exports = instace;