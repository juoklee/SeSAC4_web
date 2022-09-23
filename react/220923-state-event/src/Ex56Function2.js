import React, { useState } from 'react';

function Ex56Function2 () {

    const [cnt, setCnt] = useState(0);

    function increase() {
        setCnt(cnt+1);
    }

    function decrease() {
        setCnt(cnt-2);
    }

    return (
        <div>
            <p>cnt: {cnt}</p>
            <button onClick={increase}>increase +1</button>
            <button onClick={decrease}>decrease -2</button>
        </div>
    )

}


export default Ex56Function2;