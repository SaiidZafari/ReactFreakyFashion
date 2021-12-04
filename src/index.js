import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import store from './redux/store';
import Navigation from './component/Navigation';
import { Card } from 'react-bootstrap';
import Footer from './component/Footer';
import CopyRight from './component/CopyRight';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navigation />
      <div className="container">
        <App />

        <Card />
        <Footer />
        <Card />
        <CopyRight />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
