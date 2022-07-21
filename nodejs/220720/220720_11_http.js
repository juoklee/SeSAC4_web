const http = require("http");

// listen(): server라는 객체에 서버를 실행하고 클라이언트를 기다린다.
const server = http.createServer( function(req, res){
    //response 객체
    //& writeHead: 응답헤더 작성 
    //& write: 응답 본문 작성
    //& end: 응답 본문 작성 후 응답 종료
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8'});
    res.write("<h1>hi</h1>");
    res.end("<p>안녕</p>");
});

//& listen: 서버를 8000번의 포트로 실행한다.
server.listen(8000, function(){
    console.log("8000번 포트");
})
//& on: server객체에 이벤트를 등록한다.
//^ "request": 클라이언트가 요청할 때 발생하는 이벤트
server.on("request", function() {
    console.log("Client Request");
})
//^ "connection": 클라이언트가 접속할 때 발생하는 이벤트
server.on("connection", function(){
    console.log("Client Connection");
})
//^ "checkContinue": 클라이언트가 지속적인 연결을 하고 있을 때 발생하는 이벤트
server.on("checkContinue", function(){
    console.log("Client checkContinue");
})