import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Details from "./Pages/Details";
import Search from "./Pages/Search";
import ShoppingList from "./Pages/ShoppingList";
import { useEffect } from "react";
import Counter from "./component/Counter";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHeros,
  fetchProducts,
  fetchSpots,
} from "./redux/action/ProductAction";
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
    dispatch(fetchHeros());
    dispatch(fetchProducts());
    dispatch(fetchSpots());
    
  }, [dispatch]);

  // const productsRedux = useSelector((state) => state.allProducts.products);
   const heroData = useSelector((state) => state.heros.products);
  // const spotsRedux = useSelector((state) => state.spots.products);

  // productsData={productsRedux} heroData={herosRedux} spotsData={spotsRedux}

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home heroData={heroData} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:urlSlug" element={<Details />} />
        <Route path="/shoppingList" element={<ShoppingList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/login" element={<LoginForm />} />
        <Route /> 404 Not Fount! <Route />
      </Routes>
    </div>
  );
}

export default App;
