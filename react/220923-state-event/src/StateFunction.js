import React, { useState } from 'react';

function StateFunction () {
    // [변수이름, ] = useState(변수 값)
    // this.state {
    //     msg: ""
    // }
    const [msg, setMsg] = useState("");
    const [list, setlist] = useState([]);

    function changeMsg() {
        // setState({msg: "메세지"})
        setMsg("메세지");
        
    }

    return (
        <div>
            <p>{msg}</p>
            StateFunction
            <button onClick={changeMsg}>클릭</button>
        </div>
    )
}


export default StateFunction;