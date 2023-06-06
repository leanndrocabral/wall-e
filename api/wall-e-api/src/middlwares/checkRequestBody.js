import * as yup from "yup";

class CheckBodyMiddleware {

  async checkDance(request, response, next) {
    const body = yup.object().shape({
      gifs: yup.array().required().of(
        yup.object().shape({
          gif_url: yup.string().required(),
          single: yup.boolean()
        })
      ),
    });

    try {
      const validated = await body.validate(request.body, {
        stripUnknown: true
      });
      request.locals = validated;

      return next();
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async checkMiscellaneous(request, response, next) {
    const body = yup.object().shape({
      gifs: yup.array().required().of(
        yup.object().shape({
          gif_url: yup.string().required(),
        })
      ),
    });

    try {
      const validated = await body.validate(request.body, {
        stripUnknown: true
      });
      request.locals = validated;

      return next();
    } catch (error) {
      return response.status(400).json(error);
    }
  };
}

export const checkBodyMiddleware = new CheckBodyMiddleware();