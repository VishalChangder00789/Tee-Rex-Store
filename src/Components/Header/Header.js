import React, { useEffect, useState } from "react";

// File Imports
import CompanyLogo from "../../Assets/CompanyLogo.png";
import CartImage from "../../Assets/cart.png";
import "./Header.css";
import Cart from "../Cart/Cart";

const Header = ({ CartItem }) => {
  const [onMouseOver, setOnMouseOver] = useState(false);

  return (
    <div className="HeaderContainer">
      <div className="LogoContainer">
        <img src={CompanyLogo} />
      </div>
      <div onMouseOver={(e) => setOnMouseOver(true)} className="CartContainer">
        <img src={CartImage} alt="cart" />
        <div
          className={`${CartItem.length === 0 ? `NoItem` : `cartTotalItems`}`}
        >
          {CartItem.length > 0 ? `${CartItem.length}` : ""}
        </div>
      </div>

      {onMouseOver ? (
        <Cart setOnMouseOver={setOnMouseOver} CartItem={CartItem} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
