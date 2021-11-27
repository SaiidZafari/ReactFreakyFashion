import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Details from "./Pages/Details";
import Search from "./Pages/Search";
import ShoppingList from "./Pages/ShoppingList";
import { useState, useEffect } from 'react';
import { products } from './component/dataBase';
import Counter from './component/Counter';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux/action/ProductAction';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newProductList = products.filter((product) => {
        return Object.values(product).join(" ").toLowerCase().includes(searchTerm.toLowerCase);
      });
      setSearchResult(newProductList);
    } else {
      setSearchResult(products);
    }
  };
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  });
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:urlSlug" element={<Details />} />
        <Route path="/shoppingList" element={<ShoppingList />} />
        <Route path="counter" element={<Counter />} />
        <Route path="search" element={<Search />} />
        <Route/> 404 Not Fount! <Route />
      </Routes>
    </div>
  );
}

export default App;
