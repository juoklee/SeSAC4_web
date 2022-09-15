var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

/* css */
app.use( "/public", express.static('public'));

/* route */
app.get("/", function(req, res){
    console.log("client");
    res.sendFile( __dirname + "/chat.html");
});


var list = {};
io.on("connection", function(socket){ 
    console.log("connected: ", socket.id);

    /* 입장 */
    socket.on('info', function(data) {
        list[socket.id] = data.nickname;
        io.emit('notice', data.nickname + "님이 입장하셨습니다.");
        io.emit('list', list);
    });
    
    /* message */
    socket.on("send", function(data) { //msg 받기
        console.log("client message: ", data.msg);
        data["is_dm"] = false;
        data["nickname"] = list[socket.id];
        console.log("data:", data);
        if ( data.to == "Team chat") {
            io.emit("newMessage", data); //모든 클라이언트에게 data 보내기
        } else {
            data["is_dm"] = true;
            let socketID = Object.keys(list).find( (key) => {return list[key] === data.to}); //닉네임이 같을 때의 key(socket.id)
            io.to(socketID).emit("newMessage", data); // DM
            socket.emit("newMessage", data); // 나의 메세지
        }
    });

    /* 퇴장 */
    socket.on("disconnect", function(){
        console.log("list[socket.id]:", list[socket.id]);
        io.emit("notice", list[socket.id] + "님이 퇴장하셨습니다."); //퇴장 notice
        delete list[socket.id]; // key,value 둘다 삭제
        io.emit('list', list);
    });
});


http.listen( 8000, function() {
    console.log("Server port :", 8000);
});