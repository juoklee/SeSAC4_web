import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import './ExCSS.css';

function Student() {
    const { name } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    return (
        <div className='box2'>
            <h5>학생의 이름은 <span className='green'>{name}</span> 입니다.</h5>
            {searchParams.get("name") && <h5>실제 이름은 <span className='red'>{searchParams.get("name")}</span></h5> } 

            <button onClick={() => navigate(-1)}>이전페이지로</button>
        </div>
    );
}

export default Student;