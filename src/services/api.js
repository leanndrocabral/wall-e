const axios = require("axios").default;

const instace = axios.create({
  baseURL: "https://bee-gifs.vercel.app/gifs/"
})

module.exports = instace;