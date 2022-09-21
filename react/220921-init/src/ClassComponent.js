import React,  { Component } from 'react';
import PropTypes from 'prop-types';

/*  클래스형 Component */
class ClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>ClassComponent - function</h1>
                <h5>name: {this.props.name}</h5>
                <h5>location: {this.props.location}</h5>
                <h5>children: {this.props.children}</h5>
            </div>
        );
    }

    static propTypes = {
        name: PropTypes.string
    }
}

/*  함수형 Component */
// function ClassComponent(props) {
//     return (
//         <div>
//             <h1>ClassComponent - function</h1>
//             <h5>name: {props.name}</h5>
//             <h5>location: {props.location}</h5>
//             <h5>props.children: {props.children}</h5>
//         </div>
//     )
// }

//부모컴포넌트에서 props가 전달되지 않았을때의 기본값 설정 
ClassComponent.defaultProps = {
    name: '기본이름',
    location: '기본위치'
}

//필수 props를 지정하거나, 타입을 지정할 때 사용
ClassComponent.propTypes = {
    name: PropTypes.string
}



export default ClassComponent;