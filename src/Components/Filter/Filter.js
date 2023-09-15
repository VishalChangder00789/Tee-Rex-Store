import React from "react";
import "./Filter.css";
import ColorSelect from "../../MicroComponents/ColorSelect/ColorSelect";
import GenderSelect from "../../MicroComponents/GenderSelect/GenderSelect";
import PriceRange from "../../MicroComponents/PriceRange/PriceRange";
import Types from "../../MicroComponents/Types/Types";

const Filter = ({ productColor, productGender, priceRange, productType }) => {
  return (
    <div className="FilterComponentContainer">
      <ColorSelect productColor={productColor} />
      <GenderSelect productGender={productGender} />
      <PriceRange priceRange={priceRange} />
      <Types productType={productType} />
    </div>
  );
};

export default Filter;
