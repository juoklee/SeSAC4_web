const express = require("express");
const router = express.Router();
const user = require("../controller/UserController");

router.get("/", user.get_main);
router.post("/join", user.post_user);
router.get("/login", user.get_login);
router.post("/login", user.post_login);
router.patch("/edit", user.patch_user);
router.delete("/delete", user.delete_user);

module.exports = router; 