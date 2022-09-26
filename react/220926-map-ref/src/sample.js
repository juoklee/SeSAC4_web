import React, { useState } from 'react';

const Sample = () => {
    const[names, setNames] = useState([
        {id: 1, text: '청바지'},
        {id: 2, text: '패딩'},
        {id: 3, text: '반팔'},
        {id: 4, text: '운동화'}
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); 

    const onChange = (e) => setInputText(e.target.value);

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId+1);
        setNames(nextNames);
        setInputText('');
    }

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const namesList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>)

    // const fashion = ["청바지", "패딩","반팔","운동화"];
    // const fashionList = fashion.map(fashion => <li>{fashion}</li>);

    return(
        <div>
            <input value={inputText} onChange={onChange}></input>
            <button onClick={onClick}>추가</button>
            <ul>
                {namesList}
            </ul>
            
            {/* <ul>{fashionList}</ul>

            <li>청바지</li>
            <li>패딩</li>
            <li>반팔</li>
            <li>운동화</li> */}
        </div>
    );
}

export default Sample;