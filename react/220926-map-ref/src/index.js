import React from 'react';
import ReactDOM from 'react-dom/client';
import Map from './map';
import Sample from './sample';
import Event from './ex/Event_ex';
import Event2 from './ex/Event_ex2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Map />
    <Sample /> */}
    <Event></Event>
    <Event2></Event2>
  </React.StrictMode>
);
