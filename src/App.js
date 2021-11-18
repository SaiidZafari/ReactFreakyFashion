import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import Navigation from "./component/Navigation";
import Header from "./component/Header";
import Home from "./Pages/Home";
import Products from "./Pages/Products"
import Details from "./Pages/Details";
import Footer from "./component/Footer";
import CopyRight from "./component/CopyRight";
import Search from "./Pages/Search";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Header pageTitle="Home" />
        <Card />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:urlSlug" element={<Details />} />
          <Route path="search" element={<Search />} />
        </Routes>

        <Card />
        <Footer />
        <Card />
        <CopyRight />
      </div>
    </div>
  );
}

export default App;
