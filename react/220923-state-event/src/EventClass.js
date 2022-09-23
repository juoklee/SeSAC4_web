import React, { Component } from 'react';

class Event extends Component {
    state = {
        username: "",
        message: ""
    }

    /* 2. 생성자를 사용해서 */
    // constructor(props) {
    //     super(props);
    //     //bind: this가 컴포넌트 자신을 제대로 가리키기 위해 사용한다.
    //     this.eventChange = this.eventChange.bind(this);
    //     this.eventClick = this.eventClick.bind(this);
    // }

    // eventChange(e) {
    //     this.setState({
    //         message: e.target.value
    //     })
    // }

    // eventClick() {
    //     alert(this.state.message);
    //     this.setState({
    //         message: ""
    //     });
    // }


    /*3. 화살표 함수 사용해서 */
    eventChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            // message: e.target.value
        })
    }

    eventClick = (e) => {
        alert(this.state.username + ": " + this.state.message);
        this.setState({
            username: "",
            message: ""
        }); 
    }

    eventKeyPress = (e) => {
        if( e.key === "Enter") {
            this.eventClick();
        }
    }

    render() {
        return(
            <div>
                <h1>리액트의 이벤트</h1>

                <input 
                    type="text"
                    name="username"
                    placeholder='사용자 이름'
                    value = {this.state.username}
                    onChange ={this.eventChange}
                />

                <input 
                    type="text"
                    name="message"
                    placeholder='이곳에 입력해보세요'
                    value = {this.state.message}
                    onChange ={this.eventChange}
                    /* 1. 바로 여기서 */
                    // onChange={
                    //     (e) => {
                    //         this.setState({
                    //             message: e.target.value
                    //         })
                    //     }
                    // }
                    onKeyPress={this.eventKeyPress}
                />

                <button onClick={
                    this.eventClick
                    /* 1. 바로 여기서 */
                    // () => {
                    //     alert(this.state.message);
                    //     this.setState({
                    //         message: ""
                    //     });
                    // }
                }>클릭</button>
            </div>
        )
    }
}

export default Event;