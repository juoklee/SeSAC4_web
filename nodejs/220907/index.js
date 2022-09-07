var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

/* route */
app.get("/", function(req, res){
    console.log("client");
    res.sendFile( __dirname + "/index.html");
});



io.on("connection", function(socket){ // on 연결이 됌
    console.log("connected");
    // emit(): write, on(): read
    socket.emit("hello", "server hello"); // 같은 이벤트명을 찾아간다(클라이언트).
    socket.on("click", function(data) {
        console.log("client click:", data);
        socket.emit("clickResponse", 'success'); // socket: 현재 연결하는 그 클라이언트에만 보낸다!!
        io.emit("clickResponse", "io success"); // io: 모든 클라이언트에게 보낸다!!
    })
});



http.listen( 8000, function() {
    console.log("Server port :", 8000);
});