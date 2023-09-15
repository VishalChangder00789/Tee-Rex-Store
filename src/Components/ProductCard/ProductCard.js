import React, { useState } from "react";
import "./ProductCard.css";
import Man from "../../Assets/Gender Logo/Man.png";
import Woman from "../../Assets/Gender Logo/Women.png";
import { waitForElementToBeRemoved } from "@testing-library/react";
import indianFlag from "../../Assets/flag.png";

const ProductCard = ({ product, setCartItem, CartItem }) => {
  const handleAddToCart = (e, product) => {
    if (product.quantity - 1 < 0) {
      setErrorFlag("Not Available");
      return;
    }
    product.quantity--;
    product.cartQuantity++;

    for (let i = 0; i < CartItem.length; i++) {
      if (CartItem[i].id === product.id) {
        return;
      }
    }

    setCartItem([...CartItem, product]);
  };

  const [mouseOver, setMouseOver] = useState(false);
  const [ErrorFlag, setErrorFlag] = useState("");

  return (
    <div key={product.id} className="ProductCardContainer">
      <img src={product.imageURL} />
      <div className="DetailsContainer">
        <div className="Name">{product.name}</div>
        <div className="Type">{product.type}</div>
        <div className="Gender">
          {product.gender === "Men" ? <img src={Man} /> : <img src={Woman} />}
        </div>

        <div className="Details">
          <div
            className="Color"
            style={{ background: `${product.color}` }}
          ></div>
          <div className="Flag">
            <img src={indianFlag} />
          </div>
        </div>
        <div className={`${!ErrorFlag ? `Button` : `Error`}`}>
          <button
            onMouseEnter={(e) => setMouseOver(!mouseOver)}
            onClick={(e) => handleAddToCart(e, product)}
          >
            {!ErrorFlag ? (
              mouseOver ? (
                <span>&#8377;{product.price}</span>
              ) : (
                `Buy`
              )
            ) : (
              `Item out of Quantity`
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
