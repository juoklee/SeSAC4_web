import React, { useState, useEffect} from 'react';

const Info = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // 두번째 인자 값을 생략할 경우 리렌더링 될 때 마다 실행된다.
    useEffect(() => {
        console.log("렌더링이 완료되었습니다.");
        console.log({
            name,
            email
        });
    });
    
    // 두번째 인자 값으로 빈 배열을 넣는 경우, 처음 렌더링될 때(mount)만 실행
    useEffect(() => {
        console.log("처음 렌더링될 때만 실행된다.");
    }, []);

    
    // 특정 값이 업데이트 될 때 실행하고 싶을 때는 두번째 인자 값의 배열안에 검사하고 싶은 값을 넣는다.
    useEffect(() => {
        console.log("name이 바뀌었을 때만 실행된다.");
    }, [name]);

    // return 값이 있는 경우 hook의 cleanup 함수로 인식하고 다음 effect가 실행되기 전에 실행해준다.
    // 언마운트 될 때만 cleanup 함수를 실행하고 싶을 때 두번째 인자 갑으로 빈배열,
    // 특정 값 업데이트 -> deps 배열안에 검사하고 싶은 값
    useEffect(() => {
        console.log("effect");
        console.log(name);

        return () => {
            console.log('cleanup');
            console.log(name);
        };
    },);



    const onChageName = e => {
        setName(e.target.value);
    }

    const onChageEmail = e => {
        setEmail(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChageName}></input>
                <input value={email} onChage={onChageEmail}></input>
            </div>

            <div>
                <h2>이름: {name}</h2>
                <h2>이메일: {email}</h2>
            </div>
        </div>
    )
}
export default Info;