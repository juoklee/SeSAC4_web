import React from 'react';
import ReactDOM from 'react-dom/client';
import StateClass from './StateClass';
import StateFunction from './StateFunction';
import Ex56Class1 from './Ex56Class1';
import Ex56Function2 from './Ex56Function2';
import EventClass from './EventClass';
import EventFunction from './EventFunction';
import Event from './Event';
import EventC from './EventC';
import Handler_ex from './ex/Handler_ex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StateClass name="Sesac"/>
    <StateFunction/>
    <Ex56Class1></Ex56Class1>
    <Ex56Function2></Ex56Function2>
    <EventClass></EventClass>
    <EventFunction></EventFunction>
    <Event></Event>
    <EventC></EventC> */}
    <Handler_ex></Handler_ex>
  </React.StrictMode>
);
