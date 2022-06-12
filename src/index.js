import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';


const url = 'is this working as a props to app'





ReactDOM.render(
  <React.StrictMode>
    
    <App testProps={url} />
    
  </React.StrictMode>,
  document.getElementById('root')
);

