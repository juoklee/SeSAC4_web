import React, { useState } from 'react';

const EventFunction = () => {

    /* 1.기본 */
    // const [username, setUsername] = useState("");
    // const [message, setMessage] = useState("");

    // const onChangeUsername = (e) => setUsername(e.target.value);
    // const onChangeMessage = (e) => setMessage(e.target.value);

    // const onKeyPress = (e) => {
    //     if(e.key === "Enter") {
    //         onClick();
    //     }
    // };

    // const onClick = () => {
    //     alert(username + ": " + message);
    //     setUsername("");
    //     setMessage("");
    // };

    /* 2.객체에 넣기 */
    const [ form, setForm ] = useState({
        username: "",
        message: ""
    });

    const {username, message} = form;

    const onChange = (e) => {
        const nextForm = {
            //...form: 기존의 form 내용을 복사한다는 뜻
            ...form,
            [e.target.name]: e.target.value
        };

        setForm(nextForm);
    };

    const onClick = () => {
        alert(username + ": " + message);
        setForm({
            username: "",
            message: ""
        })
    }

    const onKeyPress =  (e) => {
        if(e.key === "Enter") {
            onClick();
        }
    }

    return (
        <div>
            <h1>리액트의 이벤트</h1>

            <input 
                type="text"
                name="username"
                placeholder='사용자 이름'
                value = {username}
                // onChange ={onChangeUsername}
                onChange = {onChange}
            />

            <input 
                type="text"
                name="message"
                placeholder='이곳에 입력해보세요'
                value = {message}
                // onChange ={onChangeMessage}
                onChange = {onChange}
                onKeyPress={onKeyPress}
            />

            <button onClick={onClick}>클릭</button>
        </div>
    )
}

export default EventFunction;