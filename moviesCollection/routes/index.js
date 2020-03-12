const router = require("express").Router();
const MovieController = require("../controllers");

router.get("/", MovieController.findAll);
router.get("/:id", MovieController.oneMovie);
router.post("/", MovieController.addMovie);

module.exports = router;
