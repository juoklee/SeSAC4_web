const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs");

app.set("view engine", "ejs");
app.use( express.static( "public" ));

// express.urlencoded({extended: true}: body-parser 미들웨어,
// 객체 형태로 전달된 데이터 내에서 또다른 중첩된 객체를 허용하겠다는 말.
app.use(express.urlencoded({extended: true}));

// 데이터를 받을 때 json형태로 받겠다.
app.use( bodyParser.json() );

app.get("/", function(req, res){
    res.render("ex32_login");
});

//^ get으로 보낼 때와 post로 보낼때 서버에서 받는 방법이 달라진다.
//^ get으로 보내면 query라는 객체에 데이터가 담겨서 들어온다.
app.get("/receive", function(req, res){
    // console.log("receive-get");
    // res.render("index");
    console.log( req.query );
    res.render("receive", req.query);
});

//^ post으로 보내면 body라는 객체에 데이터가 담겨서 들어온다.
app.post("/receive", function(req, res){
    // console.log("receive-post");
    console.log( req.body );
    res.render("receive", req.body);
});

//& 회원가입
app.post("/join", (req, res) => {
    console.log( "req.body: ", req.body );

    var {id, username, password} = req.body;

    fs.writeFile("./info.txt", id + "//" + username + "//" + password, (err) => {
        if (err) {
            console.log(err);
            res.status(400).send("err!!");
        }
    });
    res.render("finish", req.body);
});

//& 로그인
app.post("/login", (req, res) => {
    var {id, password} = req.body;

    fs.readFile("./info.txt", (err , data) => {
        if (err) {
            console.log(err);
            res.status(400).send("err!!");
        }
        console.log(data.toString());

        var filedata = data.toString().split('//');
        console.log(filedata);

        if (filedata[0] == id && filedata[2] == password ) {
            res.render("finish_login", {msg: "로그인 되었습니다."});
        }else if(filedata[0] != id && filedata[2] == password) {
            res.render("finish_login", {msg: "아이디가 올바르지 않습니다!"});
        }else if(filedata[2] != password && filedata[0] == id) {
            res.render("finish_login", {msg: "비밀번호가 올바르지 않습니다!"});
        }else if(filedata[2] != password && filedata[0] != id) {
            res.render("finish_login", {msg: "아이디, 비밀번호가 올바르지 않습니다!"});
        }
    });
});


app.listen(port, () => {
    console.log( "Server Port: ", port);
})