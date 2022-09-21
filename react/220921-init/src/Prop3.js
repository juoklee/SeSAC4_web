import React,  { Component } from 'react';
import PropTypes from 'prop-types';


class ClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
                <button onClick={this.props.valid}>콘솔 메세지</button>
            </div>
        );
    }
}

ClassComponent.defaultProps = {
    text: '이건 기본 text props입니다.'
}

ClassComponent.propTypes = {
    text: PropTypes.string,
    valid: PropTypes.func
}

export default ClassComponent;