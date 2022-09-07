var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

/* route */
app.get("/", function(req, res){
    res.sendFile( __dirname + "/index.html");
});


var msg = {hello: ": 안녕하세요!", study: ": 공부합시다!", bye: ": 안녕히계세요!"};

io.on("connection", function(socket){ 
    console.log("Server Socket Connected");
    socket.on("click", function(data) {
        console.log("client:", data);
        /* 내가 짠 코드, if문 사용은 좋지 않다! */
        if (data == 'hello') {
            socket.emit("clickResponse", data + ': 안녕하세요!');
        } else if(data == 'study') {
            socket.emit("clickResponse", data + ': 공부합시다!');
        } else {
            socket.emit("clickResponse", data + ': 안녕히계세요!');
        }
        /* 다른 방법 */
        socket.emit("clickResponse", data + msg[data]);
    })
});


http.listen( 8000, function() {
    console.log("Listening on *:", 8000);
});