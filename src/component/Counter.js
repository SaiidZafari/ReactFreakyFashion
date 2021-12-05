import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeQuantity,
} from "./../redux/action/ProductAction";
;


function Counter({addId, urlSlug}) {

  const products = useSelector((state) => state.allProducts.products);

  const product = products.find(p => p.urlSlug === urlSlug);

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
    dispatch(addToCart(product));
  };

  const handleDecrement = () => {
    setCount(count - 1);
    dispatch(removeQuantity(product));
  };

 const formatCount = () => {
   return count <= 1 ? 1 : count;
 };
 
  const dispatch = useDispatch();
 
return (
  <div>
    <button
      id={100 + addId}
      // onClick={() => this.handleIncrement(product.id)}
      onClick={handleIncrement}
      className="btn btn-outline-primary"
    >
      +
    </button>
    <span id={200 + addId} className="m-2">
      {formatCount()}
    </span>
    <button
      id={300 + addId}
      onClick={handleDecrement}
      className="btn btn-outline-primary "
    >
      -
    </button>
  </div>
);
  
}
 
export default Counter;





// class Counter extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState({ count: this.state + 1 });
//   };

//   handleDecrement = () => {
//     this.setState({ count: this.state - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <button
//           onClick={() => this.handleIncrement()}
//           className="btn btn-outline-primary"
//         >
//           +
//         </button>
//         <span className="m-2">{this.formatCount()}</span>
//         <button
//           onClick={this.handleDecrement}
//           className="btn btn-outline-primary"
//         >
//           -
//         </button>
//       </div>
//     );
//     }
//     formatCount(){
//     const { count } = this.state;
//     return count <= 0 ? 0 : count;
// }
// }

// export default Counter;

 
