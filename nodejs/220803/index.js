const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use( express.static( "uploads" ));
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

//기본 =>  ./routes/index 파일
const router = require("./routes");
// "/" 경로에 대해서 router로 가라.
app.use("/user", router); 
// "/user" 라는 주제로 묶인 경로로 접속할 시 ( localhost:포트/user/~~~ )
// ./routes/index.js 에 선언되어 있는 대로 동작한다.



//ex
// const board = require("./routes/board");
// app.use("/board", board);


app.get("/", function(req,res){
    res.send("Index");
})

app.listen(port, () => {
    console.log( "Server Port: ", port);
}) 