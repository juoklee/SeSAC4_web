const express = require("express");
const app = express();
const port = 8080;
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.set("view engine", "ejs");
app.use(cookieParser('1234'));
app.use(session({
    secret: 'secret key',
    // resave: false, // 세션을 덮어쓰기 할 지 여부
    // saveUninitialized: true, //초기값이 설정되어있지 않아도 미리 세션을 만들어둔다.
}));

const cookieConfig = {
    maxAge: 30000,
    path: '/get', // /get/~~ 에서만 확인가능하다. ex) /cookie에서는 확인 불가
    httpOnly: true, //서버로만 접속가능, 클라이언트 document.cookie로 접속 불가
    signed: true //쿠키 암호화
};


app.get("/", (req, res) => {
    //^ session 세팅
    req.session.key = "value";
    req.session.key2 = "value2";
    //^ cookie 세팅
    res.cookie('key', 'value', cookieConfig);
    // res.cookie('key2', 'value2', cookieConfig);
    res.render("index");
});


app.get("/get", (req, res) => {
    //^ session 보기
    console.log( req.session.key );
    //^ cookie 보기
    console.log( req.cookies );
    res.send( req.cookies );
})


app.get("/cookie", (req, res) => {
    res.render("cookie");
})

app.get("/destroy", (req, res) => {
    //^ 모든 세션 연결 삭제
    req.session.destroy(function(err) {
        res.send("삭제");
    })

    //^ 하나만 삭제
    req.session.key = "";
    req.session.key2 = "";
})


//^ 세션 로그인
app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {
    var flag = true;
    if( flag ) {
        req.session.id = req.body.id;
        res.redirect("/edit");
    }else {
        res.redirect("/login");
    }
});

app.get("/edit", (req, res) => {
    if ( req.session.id == undefined || req.session.id == "" ) {
        res.redirect("/login");
        return false;
    }
    // req.session.id ~~로 작업
    res.render("edit");
})



app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});