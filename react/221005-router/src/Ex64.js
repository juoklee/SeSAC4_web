import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ExMain from './ExMain';
import Student from './Student';

function Ex64() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExMain/>}></Route>
          <Route path="/student/:name" element={<Student/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Ex64;
