import React,  { Component } from 'react';

class ClassComponent extends Component {
    render() {
        var name = "주옥";

        const my_style = {
            backgroundColor: "blue",
            color: "orange",
            fontSize: "40px",
            padding: "12"
        };

        return (
            <div style={my_style}>
                <h5>{name}</h5>
            </div>
        );
    }

}

export default ClassComponent;