import React from 'react';
import ReactDOM from 'react-dom/client';
import StateClass from './StateClass';
import StateFunction from './StateFunction';
import Ex56Class1 from './Ex56Class1';
import Ex56Function2 from './Ex56Function2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ex56Class1></Ex56Class1>
    <Ex56Function2></Ex56Function2>
    {/* <StateClass name="Sesac"/>
    <StateFunction/> */}
  </React.StrictMode>
);
