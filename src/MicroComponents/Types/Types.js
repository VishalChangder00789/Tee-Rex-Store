import React, { useEffect, useState } from "react";
import "./Types.css";
import { nanoid } from "nanoid";

const Types = ({ productType }) => {
  const [ProductTypes, setProductTypes] = useState([]);
  useEffect(() => {
    setProductTypes(productType);
  });

  return (
    <div className="TypesContainer">
      <label>Types</label>
      {ProductTypes
        ? ProductTypes.map((type) => {
            return (
              <div key={nanoid()} className="TypesContainer-Inner">
                <input type="checkbox" />
                <div>{type}</div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Types;
