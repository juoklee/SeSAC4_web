import React,  { Component } from 'react';
import img from './ruru.jpg';


function ClassComponent(props) {
    const wrap = {
        backgroundColor: "rgb(237, 245, 179)",
        textAlign: "center",
        margin: "20px",
        width: "500px",
        height: "600px"
    }
    const head = {
        color: "orange",
        paddingTop: "10px"
    }
    const contents = {
        textAlign: "left",
        margin: "10px 50px",
        fontWeight: "bold"
    }
    return (
        <div style={wrap}>
            <h1 style={head}>이번주 베스트셀러</h1>
            <img src={img}></img>
            <h2>{props.title}</h2>
            <p style={contents}>저자: {props.author}</p>
            <p style={contents}>판매가: {props.price}</p>
            <p style={contents}>구분: {props.type}</p>
        </div>
    )
}


export default ClassComponent;