//resolve: 안의 작업이 성공일 때 실행, reject: 안의 작업이 실패일 때 실행
const func1 = new Promise( ( resolve, reject ) => {
    flag = true;
    if (flag) resolve("성공");
    else reject("실패");
})

//func1 실행값이 then에 들어온다.
func1.then( value => {
    return value + "1";
}).then( result => {
    //첫번째 then에서 리턴된 값이 여기 온다.
    console.log(result);
}).catch( err => {
    console.log( err );
});