import React, { useEffect, useState } from "react";
import "./PriceRange.css";
import { nanoid } from "nanoid";

const PriceRange = ({ priceRange }) => {
  const [priceRangeSlider, setPriceRangeSlider] = useState({});

  const [sliderValue, setSliderValue] = useState(250);

  useEffect(() => {
    setPriceRangeSlider(priceRange);
  });

  return (
    <div className="PriceRange">
      <label>Price</label>
      <div>{sliderValue}</div>
      {priceRangeSlider ? (
        <div key={nanoid()} className="PriceRangeInput">
          <input
            type="range"
            step={50}
            min={priceRangeSlider.minPrice}
            max={priceRangeSlider.maxPrice}
            onInput={(e) => setSliderValue(e.target.value)}
            value={sliderValue}
            // onChange={(e) => setSliderValue(e.target.value)}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PriceRange;
