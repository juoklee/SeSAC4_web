import React, {useState} from "react"

function Event() {

    const[list, setList] = useState([
        {id: 1, username: "코디", email: "codi@gmail.com"},
        {id: 2, username: "윤소희", email: "yoonsohee@gmail.com"}
    ]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nextId, setNextId] = useState(3);


    const onChangeName = (e) => {
        setName(e.target.value);
    }
    
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onClick = () => {
        const nextList = list.concat({
            id: nextId,
            username: name,
            email: email
        });

        setNextId(nextId+1);
        setList(nextList);
        setName('');
        setEmail('');

    }

    const onRemove = id => {
        const nextList = list.filter(li => li.id !== id);
        setList(nextList);
    }

    const onKeyPress =  (e) => {
        if(e.key === "Enter") {
            onClick();
        }
    }

    const newComponent = list.map(li => <p key={li.id} onDoubleClick={() => onRemove(li.id)}>{li.username}: {li.email}</p> );

    return(
        <div>
            <input placeholder="이름" value={name} onChange={onChangeName}></input>
            <input placeholder="이메일" value={email} onChange={onChangeEmail} onKeyPress={onKeyPress}></input>
            <button onClick={onClick}>등록</button>
            {newComponent}
        </div>
    )

}

export default Event;