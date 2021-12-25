import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./App.css";

import { BrowserRouter } from 'react-router-dom';

// import { store } from './app/store';
// import { Provider } from 'react-redux';

ReactDOM.render(
  <>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </>,document.getElementById("root")
);