import { getSpecificGifService } from "../services/getSpecificGif.service.js";

class GetSpecificGifController {

  async getSmile(request, response) {
    const gif = await getSpecificGifService.getSmile(request.locals);

    return response.status(200).json(gif);
  };

  async getCry(request, response) {
    const gif = await getSpecificGifService.getCry(request.locals);

    return response.status(200).json(gif);
  };

  async getDance(request, response) {
    const gif = await getSpecificGifService.getDance(request.locals);

    return response.status(200).json(gif);
  };

  async getSlap(request, response) {
    const gif = await getSpecificGifService.getSlap(request.locals);

    return response.status(200).json(gif);
  };

  async getHug(request, response) {
    const gif = await getSpecificGifService.getHug(request.locals);

    return response.status(200).json(gif);
  };

  async getPat(request, response) {
    const gif = await getSpecificGifService.getPat(request.locals);

    return response.status(200).json(gif);
  };

  async getPunch(request, response) {
    const gif = await getSpecificGifService.getPunch(request.locals);

    return response.status(200).json(gif);
  };

  async getBlush(request, response) {
    const gif = await getSpecificGifService.getBlush(request.locals);

    return response.status(200).json(gif);
  };

  async getKiss(request, response) {
    const gif = await getSpecificGifService.getKiss(request.locals);

    return response.status(200).json(gif);
  };
}

export const getSpecificGifController = new GetSpecificGifController();