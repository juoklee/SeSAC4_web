import { useState, useMemo, useCallback, useEffect, useRef } from 'react';

/* 평균값 계산 함수 */
function getAverage(list) {
    console.log("getAverage");

    var sum = 0;
    if(list.length == 0) return sum;
    for(let i=0; i<list.length; i++) {
        sum = sum + list[i];
    }

    return sum/list.length;
}

const Memo = () => {
    const [list, setList] = useState([]);
    cosnt [num, setNum] = useState(0);

    // useRef(): 함수형 컴포넌트에서 ref를 사용하기 쉽게 만들어주는 Hook
    // 인자로 받은 값으로 초기화된 변경 가능한 ref 객체를 반환 한다.
    const input = useRef(null); // input 태그에 포커스가 넘어가도록

    const onChange = useCallback( (e) => {
        setNum(e.target.value);
    }, []);

    // 함수를 재사용 하려면 useCallback
    const onInsert = useCallback( () => {
        const nextList = list.concat(parseInt(num));
        setList(nextList);
        setNum("");
        input.current.focus();
    }, [num, list]);



    /* useState(), useEffect() 사용 */
    // const [avg, setAvg] = useState(0);
    // useEffect(() => {
    //     setAvg(getAverage(list));
    // }, [list]);

    /*  useMemo() 사용 */ 
    // 특정 값이 바뀌었을 때만 연산을 실행한다.
    // 숫자나 문자열, 객체처럼 일반 값을 재사용하려면 useMemo
    const avg = useMemo(() => getAverage(list), [list]);


    return (
        <div>
            <input value={num} onChange={onChange} ref={input}></input>
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((value,index) => {
                    <li key={index}>{value}</li>
                })}
            </ul>
            <div>
                <b>평균값: {avg}</b>
            </div>
        </div>
    )
}

export default Memo;