// Third Party Imports
import { useEffect, useState } from "react";
import axios from "axios";
import { createPortal } from "react-dom";

// Helper Methods from controller
import { getAllProductProperties } from "./Controller/Controller";

// Components Import
import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import ProductCard from "./Components/ProductCard/ProductCard";

// CSS
import "./App.css";

function App() {
  const [Products, setProducts] = useState([]);

  const [productType, setProductType] = useState([]);
  const [productColor, setProductColor] = useState([]);
  const [productGender, setProductGender] = useState([]);
  const [priceRange, setPriceRange] = useState([]);

  const [CartItem, setCartItem] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      )
      .then((res) => {
        const dataObj = res.data;

        dataObj.forEach((product) => {
          product.cartQuantity = 0;
        });

        console.log(dataObj);
        setProducts(res.data);

        // Store all the things seperately
        const { ProductTypes, ProductColors, ProductGender, Price } =
          getAllProductProperties(res.data);

        setProductType(ProductTypes);
        setProductColor(ProductColors);
        setProductGender(ProductGender);
        setPriceRange(Price);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header CartItem={CartItem} />
      <div className="BodyContent">
        <div className="LeftPart">
          <Filter
            productColor={productColor}
            productGender={productGender}
            priceRange={priceRange}
            productType={productType}
          />
        </div>
        <div className="RightPart">
          {Products
            ? Products.map((product) => {
                return (
                  <ProductCard
                    product={product}
                    setCartItem={setCartItem}
                    CartItem={CartItem}
                  />
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default App;
