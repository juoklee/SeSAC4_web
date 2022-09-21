import React,  { Component } from 'react';
import img from './ruru.jpg';

class ClassComponent extends Component {
    render() {
        const style = {
            color: "orange",
            fontSize: "40px",
            maginTop: "20"
        }
        return (
            <div style={style}>
                <h2>안녕하세요</h2>
                <img src={img}></img>
            </div>
        );
    }

}

export default ClassComponent;