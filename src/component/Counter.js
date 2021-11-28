import React, {useState } from 'react';
import { useEffect } from 'react';


function Counter({addId}) {

  
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

 const formatCount = () => {
   return count <= 0 ? 0 : count;
 };
 

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);
 
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

 
