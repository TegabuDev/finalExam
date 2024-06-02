import React, { useState } from "react";
import { useUser } from "../context/authProvider";
import { useNavigate } from "react-router-dom";
const initialState = {
  id: "",
  username: "",
  carNumber: "",
  carType: "",
  password: "",
};

export default function Register() {
  const { addUser } = useUser();
  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorValidation = validate();
    if (Object.keys(errorValidation).length > 0) {
      setErrors(errorValidation);
      return;
    }
    addUser(user);
    setUser(initialState);
    setErrors({});
    navigate("/login");
  };

  function validate() {
    const alfabet = "QWERTYUIOPLKJHGFDSAZXCVBNM";
    const sybol = "@!#$%^&*";
    const errorsValidation = {};
    if (user.username === "") {
      errorsValidation.username = "miss username";
    }
    if (user.username.includes(alfabet)) {
      errorsValidation.username = " only small chars";
    }
    if (user.password.includes(alfabet) && user.password.includes(sybol)) {
      errorsValidation.password = " only small chars and unique sybol";
    }
    if (user.carNumber === "") {
      errorsValidation.carNumber = "miss carNumber";
    }
    if (user.carType === "") {
      errorsValidation.carType = "miss carType";
    }
    if (user.password === "") {
      errorsValidation.password = "miss password";
    }

    return errorsValidation;
  }

  return (
    <div className="login-container">
      <div>
        <h1>SV parking</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username"> Username :</label>
          <input
            type="text"
            name="username"
            min={4}
            max={8}
            value={user.username}
            placeholder="username"
            onChange={handleChange}
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="carNumber"> Car number :</label>
          <input
            type="text"
            name="carNumber"
            value={user.carNumber}
            placeholder="car number"
            onChange={handleChange}
          />
          {errors.carNumber && <span>{errors.carNumber}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="carType"> carType :</label>
          <input
            type="text"
            name="carType"
            placeholder="carType"
            value={user.carType}
            onChange={handleChange}
          />
          {errors.carType && <span>{errors.carType}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="password"> password :</label>
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="password"
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div className="login-btn-wrapper">
          <button type="submit">Sign up</button>
        </div>
        <div>
          <p>
            already a member?
            <button onClick={() => navigate("/login")}>Login</button>
          </p>
        </div>
      </form>
    </div>
  );
}
