import React, { Component } from 'react';


class StateClass extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     name: "SeSac",
        //     list: ['s', 'e', 's', 'a', 'c']
        // }

    }

    //이렇게 constructor 사용하지 않고도 사용 가능
    state = {
        name: "SeSac",
        cnt: 0,
        list: ['s', 'e', 's', 'a', 'c']
    }

    render() {
        return (
            <div>
                <div>{this.props.name} StateClass</div>    
                <div>{this.state.name} StateClass {this.state.cnt}</div> 
                <button onClick={()=>{ 
                    // setState는 비동기, cnt가 1만 늘어남
                    // this.setState({name: "청년취업사관학교", cnt: this.state.cnt + 1});
                    // this.setState({name: "영등포 캠퍼스", cnt: this.state.cnt + 1});

                    // cnt가 2늘어남
                    this.setState(prevState => {
                        return {name: "청년취업사관학교", cnt: prevState.cnt + 1}
                    });

                    this.setState(prevState => {
                        return { name: "영등포 캠퍼스", cnt: prevState.cnt + 1}
                    })

                }}>클릭</button>   
                <button onClick={()=>{ this.setState({list: ['c','l','i']})}}>클릭2</button>   
                <ul>
                    {/* map: 반복문 돌릴 때 사용 */}
                    {this.state.list.map((txt) => {
                        return <li>{txt}</li>
                    })}
                </ul>
            </div>    
            
        );
    }
}

export default StateClass;


//var car = new Car();
// car1.getName();

// class Car {
//     constructor() {
//         this.name = "자동차";
//     }
// }

// car1.name; 이렇게 가져올 수  있음