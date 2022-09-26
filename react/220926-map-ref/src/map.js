import React, {useState} from 'react';
function Map() {
    const [list, setList] = useState(['test', 'testing', 'apple', 'sesac', 'animal']);

    function filterCheck() {
        let lists = ['test', 'testing', 'apple', 'sesac', 'animal'];

        let newList = [];
        for (let i=0; i<lists.length; i++){
            if(lists[i].length > 4) newList.push(lists[i]);
        }

        let result = lists.filter((value)=> {
            return value.length > 4;
        })
    }

    function addElement() {
        //push(): 요소 추가, react에서는 재랜더링에서 영향x
        // let newList = list.push('s');
        console.log([...list, 's']);
        // console.log(list);
        setList([...list, 's']);
    }

    return (
        <div>
            {list}
            <ul>
                {list.map((name, i) => {
                    return <li key={"li_"+i}> {name}</li>
                })}
            </ul>
            <button onClick={addElement}>추가</button>
            <ul>
                {list.filter((name) => {
                    return name.includes("a");
                })}
            </ul>
            <button onClick={addElement}>추가</button>
        </div>
    )
}

export default Map;

// let newComponent = list.map((name, i) => {
//     return <li key={"li_"+i}> {name}</li>
// })
// {newComponent}