var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

/* route */
app.get("/", function(req, res){
    res.sendFile( __dirname + "/index.html");
});


io.on("connection", function(socket){ 
    console.log("Server Socket Connected");
    socket.on("click", function(data) {
        console.log("client:", data);
        if (data == 'hello') {
            socket.emit("clickResponse", data + ': 안녕하세요!');
        } else if(data == 'study') {
            socket.emit("clickResponse", data + ': 공부합시다!');
        } else {
            socket.emit("clickResponse", data + ': 안녕히계세요!');
        }
    })
});


http.listen( 8000, function() {
    console.log("Listening on *:", 8000);
});