import { useState, useMemo, useCallback, useEffect, useRef } from 'react';

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
    const input = useRef(null);

    const onChange = useCallback( (e) => {
        setNum(e.target.value);
    }, []);

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
    const avg = useMemo(() => getAverage(list), [list]);

    
    return (
        <div>
            <input value={num} onChange={onChange} ref={input}></input>
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((v,i) => {
                    <li key={i}>{v}</li>
                })}
            </ul>
            <div>
                <b>평균값: {avg}</b>
            </div>
        </div>
    )
}

export default Memo;