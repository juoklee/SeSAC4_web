import React, { Component } from 'react';

class EventC extends Component {

    constructor(props) {
        super(props);
        this.printConsole = this.printConsole.bind(this);
    }

    printConsole() {
        console.log("printConsole");
        console.log(this); // this 찾지 못함 -> bind사용하면 된다.
    }

    printConsole2 = () => { // bind 사용안하려면 화살표 함수 사용
        console.log("printConsole2");
        console.log(this); 
    }


    printConsole(msg) {
        console.log(msg);
        console.log(this); // this 찾지 못함 -> bind사용하면 된다.
    }

    sendParameter = () => {
        this.printConsole('2');
    }

    render() {
        return (
            <div>
                <button onClick={this.sendParameter}>sendParameter</button>
                <button onClick={() => {this.printConsole('2')} }>printConsole</button>
                <button onClick={this.printConsole2}>printConsole2</button>
            </div>
        )
    }
}

export default EventC;