import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Details from "./Pages/Details";
import Search from "./Pages/Search";
import ShoppingList from "./Pages/ShoppingList";
import { useState } from 'react';
import { products } from './component/dataBase';

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
  
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:urlSlug" element={<Details />} />
          <Route path="shoppingList" element={<ShoppingList />} />
          <Route
            path="search"           
            element={<Search
              products={searchTerm.length < 1 ? products : searchResult}
          searchKeyword={searchHandler}
          term={searchTerm}
            />}
          />
        </Routes>       
    </div>
  );
}

export default App;
