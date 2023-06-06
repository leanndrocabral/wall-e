import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class CheckGifsMiddleware {

  async smileGif(request, response, next) {
    const { id } = request.params;

    const getGif = await prisma.smile.findFirst({
      where: { id: Number(id) }
    });

    if (!getGif) {
      return response.status(404).json({ message: "Not found" });
    }

    request.locals = getGif;
    return next();
  }

  async cryGif(request, response, next) {
    const { id } = request.params;

    const getGif = await prisma.cry.findFirst({
      where: { id: Number(id) }
    });

    if (!getGif) {
      return response.status(404).json({ message: "Not found" });
    }

    request.locals = getGif;
    return next();
  }

  async danceGif(request, response, next) {
    const { id, single } = request.params;

    const getGif = await prisma.dance.findFirst({
      where: { id: Number(id), single: JSON.parse(single) }
    });

    if (!getGif) {
      return response.status(404).json({ message: "Not found" });
    }

    request.locals = getGif;
    return next();
  }

  async slapGif(request, response, next) {
    const { id } = request.params;

    const getGif = await prisma.slap.findFirst({
      where: { id: Number(id) }
    });

    if (!getGif) {
      return response.status(404).json({ message: "Not found" });
    }

    request.locals = getGif;
    return next();
  }

  async hugGif(request, response, next) {
    const { id } = request.params;

    const getGif = await prisma.hug.findFirst({
      where: { id: Number(id) }
    });

    if (!getGif) {
      return response.status(404).json({ message: "Not found" });
    }

    request.locals = getGif;
    return next();
  }

  async patGif(request, response, next) {
    const { id } = request.params;

    const getGif = await prisma.pat.findFirst({
      where: { id: Number(id) }
    });

    if (!getGif) {
      return response.status(404).json({ message: "Not found" });
    }

    request.locals = getGif;
    return next();
  }

  async punchGif(request, response, next) {
    const { id } = request.params;

    const getGif = await prisma.punch.findFirst({
      where: { id: Number(id) }
    });

    if (!getGif) {
      return response.status(404).json({ message: "Not found" });
    }

    request.locals = getGif;
    return next();
  }

  async blushGif(request, response, next) {
    const { id } = request.params;

    const getGif = await prisma.blush.findFirst({
      where: { id: Number(id) }
    });

    if (!getGif) {
      return response.status(404).json({ message: "Not found" });
    }

    request.locals = getGif;
    return next();
  }

  async kissGif(request, response, next) {
    const { id } = request.params;

    const getGif = await prisma.kiss.findFirst({
      where: { id: Number(id) }
    });

    if (!getGif) {
      return response.status(404).json({ message: "Not found" });
    }

    request.locals = getGif;
    return next();
  }
};

export const checkGifsMiddleware = new CheckGifsMiddleware();