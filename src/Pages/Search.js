 
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axios } from 'axios';

function Search(props) {

  //const productsRedux = useSelector((state) => state.allProducts.products);

  let [urlSearchParams] = useSearchParams();
  
  const q = urlSearchParams.get("q");

  const [searchResult, setSearchResult] = useState([]);

  


  // useEffect(() => {
  //   fetch(`http://localhost:4000/api/search?q=${q}`)
  //     .then(resp => resp.json())
  //     .then(result => setSearchResult(result));
  // }, [q]);

  // useEffect(() => {
  //   const searchRes= async () => {
  //     const response = await axios
  //       .get(`http://localhost:4000/api/search?q=${q}`)
  //       .catch((err) => {
  //         console.log("err", err);
  //       });
      
  //     setSearchResult(searchRes);
  //     // dispatch(setProducts(response.data));
  //   };
  // }, [q]);

  useEffect(() => {
    async function getSearchResult() {
      const result = await axios(`http://localhost:4000/api/search?q=${q}`);
      
      setSearchResult(result.data);
    }
      getSearchResult();
  });

  

  return (
    <div className="Search">
      <div>3 example of {q} founded.</div>
      <h1 className="text-info"> Search </h1>
      <Card />
      <div className="d-flex col-md-12">
        <div className="mt-5 ">
          {searchResult.map((product) => (
            <div className="d-flex  m-2" key={product.id}>
              <div className="col-1 ">
                <img
                  className="w-100 rounded-3 "
                  src={process.env.PUBLIC_URL + `/images/${product.imageUrl}`}
                  alt="Coming Soon"
                />
              </div>

              <div className=" offset-1">
                <div className="d-flex col-md-9  fs-5 fw-bold justify-content-between pe-5 ">
                  <label>{product.title}</label>
                  <label>{product.price}</label>
                </div>
                <p className="col-md-9 text-start ">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-2 mt-5 ">
          <div className=" bg-primary fs-5 text-white rounded-3 ">
            <div className="border-bottom ">Search Result</div>
            <div>Search Term</div>
            <div className="border-bottom">{q}</div>
            <div>Number of Item</div>
            <div>xxxxxx</div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Search;