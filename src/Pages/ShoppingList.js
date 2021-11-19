// import Details from "./Details";
import CartApp from "./../component/CartApp";

function ShoppingList({ OnAddProduct, handleAddProduct }) {
  const list = {
    shoppingCart: [
      {
        id: 1,
        productName: "Hand",
        productPrice: 499,
        imageUrl: "hand.jpg",
        cartTitle: "Hand",
        currency: "Sek",
      },
    ],
  };

  handleAddProduct = (shoppingCartId) => {
    console.log("Event Handler Called", shoppingCartId);
  };

 
  return (
    <div className="ShoppingList">
      <div className="ShoppingList-content">
        <h1> ShoppingList </h1>

        {list.shoppingList.map((product) => (
          <CartApp
            productName={product.productName}
            productPrice={product.productPrice}
            imageUrl={product.imageUrl}
            cartTitle={product.imageUrl}
            currency={product.imageUrl}
            onAddProduct={this.handleAddProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default ShoppingList;
