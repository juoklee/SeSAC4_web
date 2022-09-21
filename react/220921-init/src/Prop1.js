import React,  { Component } from 'react';
import PropTypes from 'prop-types';

/*  클래스형 Component */
class ClassComponent extends Component {
    render() {
        const style= {
            color: "red"
        }
        return (
            <div>
                <h1>좋아하는 음식: <span style={style}>{this.props.food}</span></h1>
            </div>
        );
    }
}

//부모컴포넌트에서 props가 전달되지 않았을때의 기본값 설정 
ClassComponent.defaultProps = {
    food: '떡볶이'
}

//필수 props를 지정하거나, 타입을 지정할 때 사용
ClassComponent.propTypes = {
    name: PropTypes.string
}



export default ClassComponent;