const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs");

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

//render: view를 rendering (view 파일인 ejs파일을 불러옴)
app.get("/", function(req, res) {
    res.render("ex32_login");
})

//send: data를 보낸다.
app.get("/test", function(req, res) {
    res.send({name: "test", msg: 123 });
})


app.get("/receive", function(req, res) {
    console.log( req.query );
    let name = req.query.name;
    let msg = req.query.name + " GET";
    res.send( {name: name, msg: msg} );
})

app.post("/receive", function(req, res) {
    console.log( req.body );
    let name = req.body.name;
    let msg = req.body.name + " 안녕";
    // res.send( req.body.name + "안녕" );
    res.send( {name: name, msg: msg} );
})


//& 실습 33
app.get("/ex30", function(req, res) {
    console.log( req.query );
    res.send( {msg: req.query.name + "님, 회원가입 성공했습니다.", data: req.query});
})


//& 실습 34
app.post("/ex32_login", function(req, res) {
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
            res.send({msg: filedata[1] + "님 로그인 되었습니다." });
        }else if(filedata[0] != id && filedata[2] == password) {
            res.send({msg: "아이디가 올바르지 않습니다!"});
        }else if(filedata[2] != password && filedata[0] == id) {
            res.send({msg: "비밀번호가 올바르지 않습니다!"});
        }else if(filedata[2] != password && filedata[0] != id) {
            res.send({msg: "아이디, 비밀번호가 올바르지 않습니다!"});
        }
    });
})


app.listen(port, () => {
    console.log( "Server Port: ", port);
}) 