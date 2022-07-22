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
    res.render("test");
});

app.listen(port, () => {
    console.log('Server port:', port);
});