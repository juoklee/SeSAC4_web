console.log("start");

//cb= login의 user콜백함수
function login(id, pw, cb) {
    setTimeout(() => {
        console.log( '정보없음' );
        cb(id);
    }, 3000);
}

//callback function  
const user = login("kim", "1234", user => {
    console.log(user + "님 반갑습니다.");
});


console.log("finish");