const express = require("express");
const controllers = require("../app/controllers");
const checkValidate = require("../app/middlewares/checkValidate");
const middlewares = require("../app/middlewares/authorization");
const { userValidation } = require("../app/validations");

const apiRouter = express.Router();
const adminControllers = controllers.api.v1.adminController;
const clientControllers = controllers.api.v1.clientController;

/**
 * TODO: Implement your own API
 *       implementations
 */

// admin
apiRouter.post("/api/v1/auth/login", checkValidate, adminControllers.login);
apiRouter.get(
  "/api/v1/auth/admin",
  middlewares.authorize,
  adminControllers.getCurrentAdmin
);
apiRouter.put(
  "/api/v1/auth/admin",
  middlewares.authorize,
  userValidation.updateDataValidate,
  checkValidate,
  adminControllers.update
);
apiRouter.put(
  "/api/v1/auth/admin/password",
  middlewares.authorize,
  userValidation.changePasswordDataValidate,
  checkValidate,
  adminControllers.changePassword
);

// client
apiRouter.post(
  "/api/v1/client/create",
  userValidation.createClientDataValidate,
  checkValidate,
  clientControllers.create
);
apiRouter.get("/api/v1/client/:id", clientControllers.find);
// apiRouter.delete("/api/v1/client/:id", clientControllers.delete);

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
