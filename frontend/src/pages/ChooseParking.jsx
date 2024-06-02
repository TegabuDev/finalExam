import React, { useState } from "react";
import { useUser } from "../context/authProvider";
import { useNavigate } from "react-router-dom";

export default function ChooseParking() {
  const [value, setValue] = useState("");

  const { addPark } = useUser();
  const navigate = useNavigate();
  function handleChange(evt) {
    setValue(evt.target.value);
  }

  const startParking = () => {
    let val = {};
    if (value === "natania") {
      val.name = value;
      val.price = 100;
    }
    if (value === "rehovot") {
      val.name = value;
      val.price = 50;
    }
    if (value === "tlv") {
      val.name = value;
      val.price = 150;
    }
    addPark(val);
    navigate("/allParking");
  };

  return (
    <div className="login-container">
      <div>
        <select onChange={handleChange}>
          <option value={""}>choose city</option>
          <option value="tlv">tlv</option>
          <option value="natania">natania</option>
          <option value="rehovot">rehovot</option>
        </select>
      </div>
      <div>
        <h1>Car number</h1>
      </div>
      <div>
        <button onClick={startParking}>start parking</button>
      </div>
    </div>
  );
}
