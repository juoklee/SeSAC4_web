import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassComponent from './ClassComponent';
import Test from './Test';
import Test2 from './Test2';
import Prop1 from './Prop1';
import Prop2 from './Prop2';
import Prop3 from './Prop3';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function valid(){
  console.log("콘솔 띄우기 성공!");
}
root.render(
  // <React.StrictMode> : 문제가 없는지 확인해주는 역할
  <>
    <Test></Test>
    <Test2></Test2>
    <Prop1 food="떡볶이"></Prop1>
    <Prop2 title="나의 하루는 4시 40분에 시작된다" author="김유진" price="13,500원" type="자기계발서"></Prop2>
    <Prop3 text="App컴포넌트에서 넘겨준 text props입니다." valid={valid}></Prop3>
    {/* <App /> */}
    {/* <ClassComponent></ClassComponent> */}
  </>  
);

// reportWebVitals(); // 성능을 측정해주는 역할
