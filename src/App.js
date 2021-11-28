import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Details from "./Pages/Details";
import Search from "./Pages/Search";
import ShoppingList from "./Pages/ShoppingList";
import { useEffect } from "react";
import Counter from "./component/Counter";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/action/ProductAction";
import LoginForm from './component/LoginForm';

function App() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResult, setSearchResult] = useState([]);

  // const searchHandler = (searchTerm) => {
  //   setSearchTerm(searchTerm);
  //   if (searchTerm !== "") {
  //     const newProductList = products.filter((product) => {
  //       return Object.values(product).join(" ").toLowerCase().includes(searchTerm.toLowerCase);
  //     });
  //     setSearchResult(newProductList);
  //   } else {
  //     setSearchResult(products);
  //   }
  // };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:urlSlug" element={<Details />} />
        <Route path="/shoppingList" element={<ShoppingList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" exact element={<Home />} />
        <Route /> 404 Not Fount! <Route />
      </Routes>
    </div>
  );
}

export default App;
