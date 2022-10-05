import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom';

function Product() {
    //이름을 id 그래로 받고 싶다면
    const { id } = useParams();
    //이름을 다르게 받고 싶다면
    const id2 = useParams().id;

    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();

    return (
        <div>
            <h1>{id}번 Product</h1>

            <h3>useLocation</h3>
            <ul>
                <li>hash: {location.hash}</li>
                <li>pathname: {location.pathname}</li>
                <li>search: {location.search}</li>
                <li>state: {location.state}</li>
                <li>key: {location.key}</li>
            </ul>

            <h3>useSearchParams</h3>
            <ul>
                <li>keyWords: {searchParams}</li>
                {/* get(): key가 search인 것을 가져오겠다. */}
                <li>keyWord: {searchParams.get("search")}</li>
            </ul>

            <h3>useNavigate</h3>
            <ul>
                <li><button onClick={() => navigate(-2)}>Go 2 pages back</button></li>
                <li><button onClick={() => navigate(-1)}>Go back</button></li>
                <li><button onClick={() => navigate(1)}>Go forward</button></li>
                <li><button onClick={() => navigate(2)}>Go 2 pages forward</button></li>
                <li><button onClick={() => navigate('/')}>Go Root</button></li>
                <li><button onClick={() => navigate('/', {state: 'a'})}>Go Root2</button></li>
            </ul>
        </div>
    );
}

export default Product;