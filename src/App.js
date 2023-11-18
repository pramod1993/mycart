import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./Components/data";
import Hedder from "./Components/Hedder"; 
function App() {
  const {productItems} = data;
  const [cartItem, setCartItem] = useState([]);
  const handleAddProduct = (product) =>{
    const ProductExist = cartItem.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItem(cartItem.map((item) => item.id === product.id ?
      {...ProductExist, quantity: ProductExist.quantity + 1}: item)
      );
    } else{
        setCartItem([...cartItem, {...product, quantity: 1}]);
    }
  }
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItem.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else{
      setCartItem(
        cartItem.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity -1}
        : item)
      )
    }
  }
 
  return (
    <div className="App">
       <Hedder productItems={productItems} cartItem={cartItem} 
       handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} 
        />
        
    </div>

  );
}

export default App;
