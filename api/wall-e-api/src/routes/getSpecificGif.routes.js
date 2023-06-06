import express from "express";
import { getSpecificGifController } from "../controllers/getSpecificGif.controller.js";
import { checkGifsMiddleware } from "../middlwares/checkGifExists.js";

export const getSpecificGif = express.Router();

getSpecificGif.get("/smile/:id", checkGifsMiddleware.smileGif, getSpecificGifController.getSmile);
getSpecificGif.get("/cry/:id", checkGifsMiddleware.cryGif, getSpecificGifController.getCry);
getSpecificGif.get("/dance/:id/:single", checkGifsMiddleware.danceGif, getSpecificGifController.getDance);
getSpecificGif.get("/slap/:id", checkGifsMiddleware.slapGif, getSpecificGifController.getSlap);
getSpecificGif.get("/hug/:id", checkGifsMiddleware.hugGif, getSpecificGifController.getHug);
getSpecificGif.get("/pat/:id", checkGifsMiddleware.patGif, getSpecificGifController.getPat);
getSpecificGif.get("/punch/:id", checkGifsMiddleware.punchGif, getSpecificGifController.getPunch);
getSpecificGif.get("/blush/:id", checkGifsMiddleware.blushGif, getSpecificGifController.getBlush);
getSpecificGif.get("/kiss/:id", checkGifsMiddleware.kissGif, getSpecificGifController.getKiss);