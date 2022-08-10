const express = require("express");
const router = express.Router();
const user = require("../controller/UserController");

//메인화면 = 회원가입 view
router.get("/", user.index);
router.post("/join", user.post_user);

router.get("/login", user.login);
router.post("/login", user.post_login);

router.post("/edit", user.edit);
router.patch("/edit", user.patch_user);
router.delete("/delete", user.delete_user);

module.exports = router; 