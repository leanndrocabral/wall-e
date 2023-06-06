import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class CreateGifsService {

  async postSmile({ gifs }) {

    const createGifs = await prisma.smile.createMany({
      data: gifs
    });

    return createGifs;
  }

  async postCry({ gifs }) {
    const createGifs = await prisma.cry.createMany({
      data: gifs
    });

    return createGifs;
  };

  async postDance({ gifs }) {
    const createGifs = await prisma.dance.createMany({
      data: gifs
    });

    return createGifs;
  };

  async postSlap({ gifs }) {
    const createGifs = await prisma.slap.createMany({
      data: gifs
    });

    return createGifs;
  };

  async postHug({ gifs }) {
    const createGifs = await prisma.hug.createMany({
      data: gifs
    });

    return createGifs;
  };

  async postPat({ gifs }) {
    const createGifs = await prisma.pat.createMany({
      data: gifs
    });

    return createGifs;
  };

  async postPunch({ gifs }) {
    const createGifs = await prisma.punch.createMany({
      data: gifs
    });

    return createGifs;
  };

  async postBlush({ gifs }) {
    const createGifs = await prisma.blush.createMany({
      data: gifs
    });

    return createGifs;
  };

  async postKiss({ gifs }) {
    const createGifs = await prisma.kiss.createMany({
      data: gifs
    });

    return createGifs;
  };
};

export const createGifsService = new CreateGifsService();