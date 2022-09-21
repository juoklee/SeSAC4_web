import './App.css';

function App() {
  /* 두번째 문제 */
  var name = "다롱이";
  var animal ="강아지";

  var a = "7";
  var b = "4";

  var title ="Hello World";
  // const flag = true;
  // var name ="";
  // if (flag) name = "SeSAC";
  // else name = "문래";

  // const style = {
  //   backgroundColor: "yellow",
  //   color: "blue"
  // };


  return (
    <div>
      {/* 첫번째 문제 */}
      이것은 div입니다
      <h3>이것은 div 안에 있는 h3태그 입니다</h3>
      {/* 두번째 문제 */}
      <h2>제 반려동물의 이름은 {name} 입니다.</h2>
      <h2> {name}는 {animal}입니다.</h2>
      {/* 세번째 문제 */}
      {(3+5) == 8 ? (<h1>정답입니다!</h1>):<h2>오답입니다!</h2>}
      {/* 네번째 문제 */}
      {a>b && (<h1>a가 b보다 큽니다</h1>)}
      {/* 다섯번째 문제 */}
      <div className="test">
        <h1 className="title">{title}</h1>
        <p>아이디: <input className="input" type="text"></input></p>
        <p>비밀번호: <input className="input" type="text"></input></p>
      </div>
      {/* 여섯번째 문제 */}
      <div className="red"></div>
      <div className="orange"></div>
      <div className="yellow"></div>
      <div className="green"></div>
      <div className="blue"></div>
      <div className="navy"></div>
      <div className="purple"></div>
    </div>

    // <div className="test" style={style}>
    //   {name}
      
    //   <div style={{
    //       backgroundColor: "yellow",
    //       color: "blue"
    //   }}>
    //     {flag && (<h1>True</h1>)}
    //     {flag ? (<h1>True</h1>):<h2>False</h2>}
    //   </div>
    // </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React!!!!
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
