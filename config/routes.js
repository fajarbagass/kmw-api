const express = require("express");
const controllers = require("../app/controllers");
const checkValidate = require("../app/middlewares/checkValidate");
const middlewares = require("../app/middlewares/authorization");
const { userValidation, faultValidation } = require("../app/validations");

const apiRouter = express.Router();
const adminControllers = controllers.api.v1.adminController;
const clientControllers = controllers.api.v1.clientController;
const faultControllers = controllers.api.v1.faultController;
/**
 * TODO: Implement your own API
 *       implementationsz
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

// fault
apiRouter.post(
  "/api/v1/fault/create",
  middlewares.authorize,
  faultValidation.createFaultDataValidator,
  checkValidate,
  faultControllers.create
);
apiRouter.put(
  "/api/v1/fault/:id",
  middlewares.authorize,
  faultControllers.update
);
apiRouter.delete(
  "/api/v1/fault/:id",
  middlewares.authorize,
  faultControllers.delete
);
apiRouter.get("/api/v1/fault", faultControllers.getAll);
apiRouter.get("/api/v1/fault/:id", faultControllers.find);
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
