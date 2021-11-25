import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchApp(props) {
  const [state, setState] = useState();

  const navigate = useNavigate();

  const submitHander = (e) => {
    e.target.reset();
    e.preventDefault();
    navigate(`/search?q=${state}`);
  };

  return (
    <form onSubmit={submitHander}>
      <input
        class="form-control"
        type="search"
        placeholder="Search..."
        aria-label="/Search"
        onChange={(e) => setState(e.target.value)}
      />
      <i className="search icon"></i>
    </form>
  );
}

export default SearchApp;
