import React, { Component, createRef } from "react";
import "./ScrollBox.css";

class ScrollBox extends Component {

    moveBottom1() {
        let div = document.getElementById("div1");
        div.scrollTop = div.scrollHeight;
    }


    moveBottom2 = () => {
        this.div2.scrollTop = this.div2.scrollHeight;
    }

    div3 = createRef();
    moveBottom3 = () => {
        this.div3.current.scrollTop = this.div3.current.scrollHeight;
    }

    render() {
        return(
            <div>
                <div class="div1" id="div1">
                    <div class="div2"></div>
                </div>
                <button onClick={this.moveBottom1}>맨 밑으로(id)</button>

                <br></br>
                <div class="div1" ref={ (ref) => {this.div2 = ref}}>
                    <div class="div2"></div>
                </div>
                <button onClick={this.moveBottom2}>맨 밑으로(ref)</button>

                <br/>
                <div class="div1" ref={this.div3}>
                    <div class="div2"></div>
                </div>
                <button onClick={this.moveBottom3}>맨 밑으로(createRef)</button>
            </div>
        )
    }
}

export default ScrollBox;