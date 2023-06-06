import express from "express";
import { createGifsController } from "../controllers/createGifs.controller.js";
import { checkBodyMiddleware } from "../middlwares/checkRequestBody.js";

export const createGifs = express.Router();

createGifs.post("/smile", checkBodyMiddleware.checkMiscellaneous, createGifsController.postSmile);
createGifs.post("/cry", checkBodyMiddleware.checkMiscellaneous, createGifsController.postCry);
createGifs.post("/dance", checkBodyMiddleware.checkDance, createGifsController.postDance);
createGifs.post("/slap", checkBodyMiddleware.checkMiscellaneous, createGifsController.postSlap);
createGifs.post("/hug", checkBodyMiddleware.checkMiscellaneous, createGifsController.postHug);
createGifs.post("/pat", checkBodyMiddleware.checkMiscellaneous, createGifsController.postPat);
createGifs.post("/punch", checkBodyMiddleware.checkMiscellaneous, createGifsController.postPunch);
createGifs.post("/blush", checkBodyMiddleware.checkMiscellaneous, createGifsController.postBlush);
createGifs.post("/kiss", checkBodyMiddleware.checkMiscellaneous, createGifsController.postKiss);