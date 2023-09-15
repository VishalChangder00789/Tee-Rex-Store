import React, { useEffect, useState } from "react";
import "./ColorSelect.css";
import { nanoid } from "nanoid";

const ColorSelect = ({ productColor }) => {
  const [Colors, setColors] = useState([]);

  useEffect(() => {
    setColors(productColor);
  }, []);

  return (
    <div className="ColorSelectContainer">
      <label>Colors</label>
      {productColor
        ? productColor.map((color) => {
            return (
              <div key={nanoid()} className="ColorSelectContainer-Inner">
                <input type="checkbox" />
                <div>{color}</div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default ColorSelect;
