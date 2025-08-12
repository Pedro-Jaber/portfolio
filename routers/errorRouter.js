const { Router } = require("express");
const controllerError = require("../controllers/controllerError");

const router = Router();

router.get("/400", controllerError.error400);
router.get("/401", controllerError.error401);
router.get("/403", controllerError.error403);
router.get("/404", controllerError.error404);
router.get("/405", controllerError.error405);
router.get("/500", controllerError.error500);
router.get("/503", controllerError.error503);
router.get("/504", controllerError.error504);

module.exports = router;
