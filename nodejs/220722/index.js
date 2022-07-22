const express = require('express');
const app = express();
const port = 8000;

//'public'이 정적파일을 관리하는 곳이다.
app.use( '/abc', express.static( 'public' ));

//기본경로 '/'
app.get('/', (req, res) => {
    res.send( 'Hello Express!' );
});

app.listen(port, () => {
    console.log('Server port:', port);
});