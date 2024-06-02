import React from "react";
import { useUser } from "../context/authProvider";
import { useNavigate } from "react-router-dom";

export default function AllParking() {
  const { parking } = useUser();
  const navigate = useNavigate();
  const close = () => {};
  const pay = () => {
    //
    navigate("/history");
  };
  return (
    <div className="login-container">
      <div>
        <h1>SV parking</h1>
        <div>
          {parking.map((p, index) => (
            <div key={index}>
              <div>{p.name}</div>
              <div>
                {p.price}
                <div>
                  <button onClick={pay}>pay</button>
                </div>
              </div>
            </div>
          ))}
          <button onClick={close}>close</button>
        </div>
      </div>
    </div>
  );
}
