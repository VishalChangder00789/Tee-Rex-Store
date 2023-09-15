import React, { useEffect, useState } from "react";
import "./GenderSelect.css";
import { nanoid } from "nanoid";

const GenderSelect = ({ productGender }) => {
  const [Genders, setGenders] = useState([]);

  useEffect(() => {
    setGenders(productGender);
  });

  return (
    <div className="GenderSelectContainer">
      <label>Gender</label>
      {Genders
        ? Genders.map((color) => {
            return (
              <div key={nanoid()} className="GenderSelectContainer-Inner">
                <input type="checkbox" />
                <div>{color}</div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default GenderSelect;
