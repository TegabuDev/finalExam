import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "user",
      carNumber: 233232,
      carType: "mazda",
      password: "123123",
    },
    {
      id: 2,
      username: "user1",
      carNumber: 233232,
      carType: "df",
      password: "123123",
    },
  ]);
  const initialState = { name: "", price: "" };
  const [parking, setParking] = useState([initialState]);

  const addPark = (city) => {
    setParking([...parking, city]);
  };

  const addUser = (user) => {
    const newUser = { id: users.length + 1, user };
    setUsers([...users, newUser]);
  };

  const loginUser = (user) => {
    return users.some(
      (u) => u.username === user.username && u.password === user.password
    );
  };

  const value = { addUser, loginUser, addPark, parking };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
// change
export const useUser = () => useContext(AuthContext);
