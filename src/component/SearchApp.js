import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { searchProducts } from './../redux/action/ProductAction';

function SearchApp(props) {

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.target.reset();
    e.preventDefault();
    navigate(`/search?q=${searchTerm}`);
    console.log(searchTerm);    
  };

      

      const dispatch = useDispatch();

      useEffect(() => {
        if (searchTerm !== "") {
          dispatch(searchProducts(searchTerm));
        }
      });

  return (
    <form onSubmit={submitHandler}>
      <input
        class="form-control"
        type="search"
        placeholder="Search..."
        aria-label="/Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <i className="search icon"></i>
    </form>
  );
}

export default SearchApp;
