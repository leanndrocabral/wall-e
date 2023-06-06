import express from "express";
import cors from "cors";
import { createGifs } from "./routes/createGifs.routes.js";
import { getSpecificGif } from "./routes/getSpecificGif.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/gifs", createGifs);
app.use("/gifs", getSpecificGif);

app.listen(3000, () => console.log("Server is running"));