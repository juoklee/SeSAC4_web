const express = require("express");
const app = express();
const port = 8080;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(cookieParser('1234'));


//cookie 세팅
app.get("/", (req, res) => {
    res.render("index");
});


app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});