const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );


app.get("/", function(req, res) {
    res.render("index");
})

app.post("/receive", function(req, res) {
    console.log( req.body );
    let name = req.body.name;
    let msg = req.body.name + "안녕";
    res.send( {name: name, msg: msg});
})

app.listen(port, () => {
    console.log( "Server Port: ", port);
}) 