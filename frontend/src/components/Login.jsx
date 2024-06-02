import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/authProvider";

const initialState = {
  username: "",
  password: "",
};
export default function () {
  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const { loginUser } = useUser();
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
    loginUser(user);
    setUser(initialState);
    setErrors({});
    navigate("/chooseParking");
  };

  function validate() {
    const errorsValidation = {};
    if (user.username === "") {
      errorsValidation.username = "miss username";
    }
    if (user.password === "") {
      errorsValidation.password = "miss password";
    }
    if (loginUser(user) === undefined || loginUser(user) === false) {
      errorsValidation.res = "invalid credential";
    }
    return errorsValidation;
  }

  return (
    <div className="login-container">
      <div>
        <h1>SV parking</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        {errors.res && <span>{errors.res}</span>}

        <div className="input-group">
          <label htmlFor="username"> Username :</label>
          <input
            type="text"
            name="username"
            value={user.username}
            placeholder="username"
            onChange={handleChange}
          />
          {errors.username && <span>{errors.username}</span>}
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
          <button type="submit">Login</button>
        </div>
        <div>
          <p>
            don't have account?{" "}
            <button onClick={() => navigate("/signup")}>signup</button>
          </p>
        </div>
      </form>
    </div>
  );
}
