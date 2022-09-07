var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

/* route */
app.get("/", function(req, res){
    console.log("client");
    res.sendFile( __dirname + "/index.html");
});


// io => 클라이언트와의 모든 연결을 갖고 있는 친구
// socket => 클라이언트 한명
io.on("connection", function(socket){ 
    console.log("connected", socket.id);
    socket.emit("info", socket.id); // socket.id: 클라이언트를 구분하는 식별자 id

    io.emit("notice", socket.id); // 입장 notice
    
    socket.on("send", function(data) { //msg 받기
        console.log("client message: ", data.msg);
        io.emit("newMessage", data); //모든 클라이언트에게 data 보내기
    });

    socket.on("disconnect", function(){
        io.emit("left", socket.id); //퇴장 notice
    });
});


http.listen( 8000, function() {
    console.log("Server port :", 8000);
});