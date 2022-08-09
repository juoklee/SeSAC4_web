const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'sesac'
});

//방명록 전체 정보 조회
exports.get_visitors = (cb) => {
    cnn.query('SELECT * FROM visitor;', (err, rows)=> {
        if ( err ) throw err;
        console.log( rows ); 

        cb(rows);
    });
}

//방명록 등록
exports.insert = ( name, comment, cb ) => {
    var sql = "INSERT INTO visitor (name, comment) VALUES ('" + name + "', '" + comment + "');";
    cnn.query(sql, (err, rows) => {
        if ( err ) throw err;
        console.log( rows ); 

        cb(rows.insertId);
    });
}

//방명록 단일 정보 조회
exports.get_visitor = (id, cb) => {
    // id 컬럼의 값이 id인 데이터를 1개만 검색한다.
    cnn.query(`SELECT * FROM visitor Where id= ${id} limit 1;`, (err, rows) => {
        if ( err ) throw err;
        console.log( rows ); 

        cb(rows);
    });
}

//방명록 정보 수정
exports.update = (data, cb) => {
    var sql = `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id}`;
    cnn.query(sql, (err, rows) => {
        if ( err ) throw err;
        console.log( rows );

        cb(rows);
    })
}

//방명록 정보 삭제
exports.delete = (id, cb) => {
    cnn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
        if ( err ) throw err;
        console.log( rows );

        cb(rows);
    })
}