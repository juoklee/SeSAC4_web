const express = require("express");
const app = express();
const port = 8080;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(cookieParser('1234'));

const cookieConfig = {
    maxAge: 30000,
    path: '/get', // /get/~~ 에서만 확인가능하다. ex) /cookie에서는 확인 불가
    httpOnly: true, //서버로만 접속가능, 클라이언트 document.cookie로 접속 불가
    signed: true //쿠키 암호화
};

//cookie 세팅
app.get("/", (req, res) => {
    res.cookie('key', 'value', cookieConfig);
    res.cookie('key2', 'value2', cookieConfig);
    res.render("index");
});

//cookie 보기
app.get("/get", (req, res) => {
    console.log( req.cookies );
    res.send( req.cookies );
})


app.get("/cookie", (req, res) => {
    res.render("cookie");
})

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});