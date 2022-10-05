import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './ExCSS.css';
const ExMain = () => {
    return (
        <div className="box">
            <Link to="/">
                <h2>ReactRouter 실습</h2>
            </Link>
            <nav>
                <ul className='ul'>
                    <li className='li'><Link to="/student/sesac">학생SeSAC</Link></li>
                    <li className='li'><Link to="/student/codingon">코딩온</Link></li>
                    <li className='li'><Link to="/student/new?name=sesac&key=id#codingon">searchParams</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default ExMain;