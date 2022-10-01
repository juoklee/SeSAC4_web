// 확장자: .module.css
import style from './6CSSModule.module.css';

// CSS Module은 클래스 이름을 고유한 값으로 만들어서
// 컴포넌트의 클래스 이름이 중첩되지 않도록 해준다.
const CSSModule = () => {

    // bind를 사용해서 style. 을 생략 가능
    // const setting = Names.bind(style);

    return (
        // 클래스를 여러개 적용할 땐 backtick 문자 사용
        <div className={`${style.box1} ${style.center}`}>
            <h2>Css module</h2>
        </div>

        // 혹은 classnames를 설치해서 여러 클래스를 적용
        // npm i classnames
        // import Names from 'classnames';
        // <div className = {Names(style.box1, style.center)} />
        
        // bind 사용
        // <div className = {setting("box1", "center")} />
    )
}

export default CSSModule;