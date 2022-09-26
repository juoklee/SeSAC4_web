import React, {useState} from "react"
import './Event_ex2.css';

function Event2() {

    const [list, setList] = useState([]);
    const [searchlist, setSearchlist] = useState([]);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [searchWord, setSearchWord] = useState('');
    const [searchRequire, setSearchRequire] = useState('');
    const [nextId, setNextId] = useState(1);

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    // 작성
    const write = () => {
        const nextList = list.concat({
            id: nextId,
            name: name,
            title: title
        });

        setNextId(nextId+1);
        setList(nextList);
        setName('');
        setTitle('');
    }

    const newComponent = list.map(li => <tr><td>{li.id}</td><td>{li.title}</td><td>{li.name}</td></tr>);

     // 검색
    const onChangeSearch = (e) => {
        setSearchWord(e.target.value);
        console.log("searchWord:", searchWord);
    }

    const onChangeRequire = (e) => {
        setSearchRequire(e.target.value);
        console.log("searchRequire:", searchRequire);
    }
   
    const search = () => {
        let sList = list.filter((li) => {
            if( li[searchRequire].includes(searchWord)) return li;
        });
        console.log("sList:", sList);
        setSearchlist(sList);
        console.log("searchlist:", searchlist);
        setSearchWord('');
    }

    const SearchComponent = searchlist.map(li => <tr><td>{li.id}</td><td>{li.title}</td><td>{li.name}</td></tr>);

    return(
        <div>
            <fieldset>
                <span>작성자: </span>
                <input placeholder="작성자" value={name} onChange={onChangeName}></input> &nbsp;
                <span>제목: </span>
                <input placeholder="제목" value={title} onChange={onChangeTitle}></input> &nbsp;
                <button onClick={write}>작성</button> 
            </fieldset>
            <br/>
            <select onChange={onChangeRequire}>
                <option value="name">작성자</option>
                <option value="title">제목</option>
            </select> &nbsp;
            <input placeholder="검색어" value={searchWord} onChange={onChangeSearch}></input>
            <button onClick={search}>검색</button> 
            <br/>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {newComponent}
                </tbody>
            </table>
            <br/>

            { searchlist.length > 0 ?
                (
                    <div>
                        <p>검색결과</p>
                        <br/>
                        <table>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>작성자</th>
                                </tr>
                            </thead>
                            <tbody>
                                {SearchComponent}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div>
                        <p>검색결과가 없습니다.</p>
                    </div>
                )
            
            }
            
        </div>
    )
}

export default Event2;