const { Router } = require("express");
const controllerProjectsBegginer = require("../controllers/controllerProjectsBegginer");

const router = Router();

router.route("/beginner/bin2dec").get(controllerProjectsBegginer.bin2dec);

module.exports = router;
