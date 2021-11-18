import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import CartApp from "../component/CartApp";
import { products } from './../component/dataBase';

function Details() {

    const { urlSlug } = useParams();

    // const [product, setProduct] = useState(null);

    // useEffect(() => {
    //   fetch(`http://localhost:4000/api/product/${urlslag}`)
    //     .then((resp) => resp.json())
    //     .then((prod) => setProduct(prod));
    // });

    let myProduct = products.find(p => p.pageName === urlSlug);

return (
<div className='Details '>
<div className='Details-content container'>
            <h1>{urlSlug}</h1>
           
</div>
</div>
);
}
 
export default Details;