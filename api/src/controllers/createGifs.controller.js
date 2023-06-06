import { createGifsService } from "../services/createGifs.service.js";

class CreateGifsController {

  async postSmile(request, response) {
    const gifs = await createGifsService.postSmile(request.locals);

    return response.status(201).json(gifs);
  };

  async postCry(request, response) {
    const gifs = await createGifsService.postCry(request.locals);

    return response.status(201).json(gifs);
  };

  async postDance(request, response) {


    const gifs = await createGifsService.postDance(request.locals);

    return response.status(201).json(gifs);
  };

  async postSlap(request, response) {
    const gifs = await createGifsService.postSlap(request.locals);

    return response.status(201).json(gifs);
  };

  async postHug(request, response) {
    const gifs = await createGifsService.postHug(request.locals);

    return response.status(201).json(gifs);
  };

  async postPat(request, response) {
    const gifs = await createGifsService.postPat(request.locals);

    return response.status(201).json(gifs);
  };

  async postPunch(request, response) {
    const gifs = await createGifsService.postPunch(request.locals);

    return response.status(201).json(gifs);
  };


  async postBlush(request, response) {
    const gifs = await createGifsService.postBlush(request.locals);

    return response.status(201).json(gifs);
  };

  async postKiss(request, response) {
    const gifs = await createGifsService.postKiss(request.locals);

    return response.status(201).json(gifs);
  };
}

export const createGifsController = new CreateGifsController();