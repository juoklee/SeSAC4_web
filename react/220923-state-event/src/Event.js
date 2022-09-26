import React, { useState } from 'react';

function Event() {
    function clickEvent(e) {
        console.log( e );

        let list = ['a','b','c'];
        let newList = list.map((value, index, arr) => {
            console.log(value);
            console.log(index);
            console.log(arr);

            return value + index;
        });
        console.log("newList:", newList);
    }

    function aClick(e) {
        e.preventDefault(); // 기본 동작을 막기 위해 사용
        console.log( "aClick" );
        console.log( e );
    }

    return (
        <div>
            <a href='#' onClick={aClick}>a태그</a>
            <button onClick={clickEvent}>click</button>
        </div>
    )     
}

export default Event;