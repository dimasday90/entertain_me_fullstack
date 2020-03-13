const router = require("express").Router();
const MovieController = require("../controllers");

router.get("/", MovieController.findAll);
router.get("/:id", MovieController.oneMovie);
router.post("/", MovieController.addMovie);
router.put("/:id", MovieController.updateOneMovie);
router.delete("/:id", MovieController.deleteOneMovie);

module.exports = router;
