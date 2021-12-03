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
  fetchHero,
  fetchProducts,
  fetchSpots,
} from "./redux/action/ProductAction";
import LoginForm from './component/LoginForm';
import MyPage from './Pages/MyPage';
import WrongLogin from './Pages/WrongLogin';
import Header from './component/Header';

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
    dispatch(fetchSpots());
    dispatch(fetchHero("Woman"));
  }, [dispatch]);

  // const productsRedux = useSelector((state) => state.allProducts.products);
  const hero = useSelector((state) => state.hero);
  // const spotsRedux = useSelector((state) => state.spots.products);

  // productsData={productsRedux} heroData={herosRedux} spotsData={spotsRedux}

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home heroData={hero} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:urlSlug" element={<Details />} />
        <Route path="/shoppingList" element={<ShoppingList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/header" element={<Header />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/wronglogin" element={<WrongLogin />} />
        <Route /> 404 Not Fount! <Route />
      </Routes>
    </div>
  );
}

export default App;
