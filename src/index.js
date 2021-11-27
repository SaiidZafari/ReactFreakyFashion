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
import Header from './component/Header';
import { Card } from 'react-bootstrap';
import Footer from './component/Footer';
import CopyRight from './component/CopyRight';

// TODO: titta på redux thunks
//store.dispatch(loadInitialData());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Navigation />
      <div className="container">
        <Header pageTitle="Home" />
        <Card />

        <App />

        <Card />
        <Footer />
        <Card />
        <CopyRight />
      </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
