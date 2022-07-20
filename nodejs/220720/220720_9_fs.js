const fs = require("fs").promises;

// console.log(fs);

// 파일 읽어오기
// fs.readFile('./text.txt', function(err, data) {
//     if (err) throw err;
//     console.log( data.toString() );
// });


// promise 방식으로 파일 생성하기
// fs.writeFile('./write.txt', '안녕',)
//     .then(() => {
//         console.log("작성완료");
//     })
//     .catch((err) => {
//         console.log( err );
//     });


// promise 방식으로 파일 이어서 적기
// fs.appendFile('./write.txt', '안녕',)
//     .then(() => {
//         console.log("작성완료");
//     })
//     .catch((err) => {
//         console.log( err );
//     });


//promise 방식으로 파일 복사 / 1:복사할파일, 2:복사해서만들파일
// fs.copyFile('./write.txt', './copy.txt')
//     .then(() => {
//         console.log("복사완료");
//     })
//     .catch((err) => {
//         console.log( err );
//     });


//동기식 처리
async function exec() {
    await fs.writeFile("./write1.txt", "안녕!");
    await fs.copyFile("./write1.txt", "./new2.txt");
}
exec();