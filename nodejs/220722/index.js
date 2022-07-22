const express = require('express');
const app = express();
const port = 8000;

//view관련파일은 모두 views폴더에 관리
app.set('view engine', 'ejs');

//'public'이 정적파일을 관리하는 곳이다.
// 정적파일을 관리하는 가상경로가 /abc
app.use( '/abc', express.static( 'public' ));

//기본경로 '/'
app.get('/', (req, res) => {
    //두번째 인자: 딕셔너리 형태로 백에서 프론트로 보낼 수 있다.
    var list = ['apple', 'banana'];
    res.render("test", {list: list , a:'aaa'});
});

app.listen(port, () => {
    console.log('Server port:', port);
});