const http = require("http");

// listen(): server라는 객체에 서버를 실행하고 클라이언트를 기다린다.
const server = http.createServer( function(req, res){
    //200:성공 상태, 400:실패 상태
    //response
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8'});
    res.write("<h1>hi</h1>");
    res.end("<p>안녕</p>");
});

//
server.listen(8000, function(){
    console.log("8000번 포트");
})

server.on("request", function() {
    console.log("Client Request");
})

server.on( "connection", function(){
    console.log("Client Connection");
})

server.on( "checkContinue", function(){
    console.log("Client checkContinue");
})