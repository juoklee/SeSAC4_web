const express = require("express");
const userRouter = express.Router();
const user = require("../controller/UserController");

userRouter.get("/join", user.join);
userRouter.post("/join", user.post_join);
userRouter.get("/login", user.login);
userRouter.post("/login", user.post_login); 

module.exports = userRouter; 