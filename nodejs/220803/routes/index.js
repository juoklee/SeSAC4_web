const express = require("express");
const userRouter = express.Router();
const user = require("../controller/UserController");


// /로 접속 시 UserController의 index 함수를 실행한다.
userRouter.get("/", user.index);
// /register 로 접속 시 UserController의 register 함수를 실행한다.
userRouter.get("/register", user.register); 
userRouter.post("/register", user.post_register); 

userRouter.get("/login", user.login);
userRouter.post("/login", user.post_login); 

// "/register" 경로
//user => UserController 파일안의, 함수 = register


module.exports = userRouter; 
// 경로와 컨트롤러 내의 함수를 연결시켜놓은 내용을 module로 내보낸다.