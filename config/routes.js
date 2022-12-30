const express = require("express");
const controllers = require("../app/controllers");
const checkValidate = require("../app/middlewares/checkValidate");
const middlewares = require("../app/middlewares/authorization");
const {
  userValidation,
  faultValidation,
  indicationValidation,
  kbValidation,
  consultationValidation,
  resultValidation,
} = require("../app/validations");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../docs/openapi-kmw.json");

const apiRouter = express.Router();
const adminControllers = controllers.api.v1.adminController;
const clientControllers = controllers.api.v1.clientController;
const faultControllers = controllers.api.v1.faultController;
const indicationControllers = controllers.api.v1.indicationController;
const kbControllers = controllers.api.v1.kbController;
const consultationControllers = controllers.api.v1.consultationController;
const resultControllers = controllers.api.v1.resultController;

/**
 * TODO: Implement your own API
 *       implementationsz
 */

// openapi kmw
apiRouter.use("/api/v1/api-docs", swaggerUi.serve);
apiRouter.get("/api/v1/api-docs", swaggerUi.setup(swaggerDocument));

// admin
apiRouter.post(
  "/api/v1/auth/login",
  userValidation.loginDataValidate,
  checkValidate,
  adminControllers.login
);
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
apiRouter.get("/api/v1/client", clientControllers.getAll);
apiRouter.get("/api/v1/client/:id", clientControllers.find);
apiRouter.delete("/api/v1/client/:id", clientControllers.delete);

// fault
apiRouter.post(
  "/api/v1/fault/create",
  middlewares.authorize,
  faultValidation.faultDataValidator,
  checkValidate,
  faultControllers.create
);
apiRouter.put(
  "/api/v1/fault/:id",
  middlewares.authorize,
  faultValidation.faultDataValidator,
  checkValidate,
  faultControllers.update
);
apiRouter.delete(
  "/api/v1/fault/:id",
  middlewares.authorize,
  faultControllers.delete
);
apiRouter.get("/api/v1/fault/:id", faultControllers.find);
apiRouter.get("/api/v1/fault", faultControllers.getAll);

// indication
apiRouter.post(
  "/api/v1/indication/create",
  middlewares.authorize,
  indicationValidation.indicationDataValidator,
  checkValidate,
  indicationControllers.create
);
apiRouter.put(
  "/api/v1/indication/:id",
  middlewares.authorize,
  indicationValidation.indicationDataValidator,
  checkValidate,
  indicationControllers.update
);
apiRouter.delete(
  "/api/v1/indication/:id",
  middlewares.authorize,
  indicationControllers.delete
);
apiRouter.get("/api/v1/indication/:id", indicationControllers.find);
apiRouter.get("/api/v1/indication", indicationControllers.getAll);

// Knowlegde Base
apiRouter.post(
  "/api/v1/knowledge-base/create",
  middlewares.authorize,
  kbValidation.kbDataValidate,
  checkValidate,
  kbControllers.create
);
apiRouter.put(
  "/api/v1/knowledge-base/:id",
  kbValidation.kbDataValidate,
  checkValidate,
  middlewares.authorize,
  kbControllers.update
);
apiRouter.delete(
  "/api/v1/knowledge-base/:id",
  middlewares.authorize,
  kbControllers.delete
);
apiRouter.get("/api/v1/knowledge-base/:id", kbControllers.find);
apiRouter.get("/api/v1/knowledge-base", kbControllers.getAll);

// consultation
apiRouter.post(
  "/api/v1/consultation/create",
  consultationValidation.consultationDataValidate,
  checkValidate,
  consultationControllers.create
);
apiRouter.delete(
  "/api/v1/consultation/:id",
  middlewares.authorize,
  consultationControllers.delete
);
apiRouter.get("/api/v1/consultation", consultationControllers.getAll);

// result
apiRouter.post(
  "/api/v1/result/create",
  resultValidation.resultDataValidate,
  checkValidate,
  resultControllers.create
);
apiRouter.delete(
  "/api/v1/result/:id",
  middlewares.authorize,
  resultControllers.delete
);
apiRouter.get("/api/v1/result", resultControllers.getAll);

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
