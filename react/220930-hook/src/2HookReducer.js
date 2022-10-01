import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return {value: state.value +1};
        case "DECREMENT":
            return {value: state.value -1};
        default:
            return state;
    }

}

const Reducer = () => {

    // Reducer: 현재 상태와 업데이트를 위해
    // state: 현재 가리키고 있는 상태
    // dispatch: 액션을 발생시키는 함수
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return(
        <div>
            <h1>{state.value}</h1>

            <button onClick={ () => {dispatch({type: "DECREMENT"})}}>-1</button>
            <button onClick={ () => {dispatch({type: "INCREMENT"})}}>+1</button>
        </div>
    )
}

export default Reducer;