import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Header from './Component/Header';
import Timetable from './Component/Timetable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Timetable />
    <App />
  </React.StrictMode>
);