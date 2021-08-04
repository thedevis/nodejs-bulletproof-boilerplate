const { celebrate, Joi } = require("celebrate");
const { Router } = require("express");
const { Container } = require("typedi");
const AuthService = require("../../services/auth");
const middlewares = require("../middlewares");

const route = Router();

module.exports = (app) => {
  app.use("/auth", route);
  route.post(
    "/signup",
    celebrate({
      body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
      }),
    }),
    async (req, res, next) => {
      const logger = Container.get("logger");
      logger.debug("Calling Sign-Up endpoint with body: %o", req.body);
      try {
        let IUserInputDTO = req.body;
        const authServiceInstance = new AuthService(Container);
        const { user, token } = await authServiceInstance.SignUp(IUserInputDTO);
        return res.status(201).json({ user, token });
      } catch (e) {
        logger.error("🔥 error: %o", e);
        return next(e);
      }
    }
  );
};
