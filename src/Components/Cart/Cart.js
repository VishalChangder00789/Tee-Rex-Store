import React, { useEffect, useState } from "react";
import "./Cart.css";
import { createPortal } from "react-dom";

const Cart = ({ setOnMouseOver, CartItem }) => {
  const [cartItems, setcartItems] = useState([]);
  const [noItem, setItem] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0) {
      setItem(true);
    } else {
      setItem(false);
    }
  });

  useEffect(() => {
    setcartItems(CartItem);
    console.log(cartItems);
  });

  return (
    <>
      {createPortal(
        <>
          <div
            onClick={(e) => setOnMouseOver(false)}
            className="OutElement"
          ></div>
          <div id="CartContainerId" className="CartComponentContainer">
            <div>
              {cartItems.map((item) => {
                return (
                  <div className="CartItemContainer">
                    <div className="ImageContainer">
                      <img src={item.imageURL} />
                    </div>
                    <div className="ProductCartDetails">{item.name}</div>
                    <div className="QuantityControl">
                      <div className="controlButton">-</div>
                      <div className="Quantity">{item.cartQuantity}</div>
                      <div className="controlButton">+</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="CheckoutButton">
              {noItem ? `Add items` : `Checkout`}
            </div>
          </div>
        </>,
        document.getElementById("ProductCart")
      )}
    </>
  );
};

export default Cart;
