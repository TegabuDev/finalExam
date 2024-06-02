import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="app">
      <div className="nav">
        <div>
          <NavLink to={"/allparking"}>All parking</NavLink>
        </div>
        <div>
          <NavLink to={"/parking"}>Parking</NavLink>
        </div>
        <div>
          <NavLink to={"/history"}>History</NavLink>
        </div>
        <div>
          <NavLink to={"/exit"}>Exit</NavLink>
        </div>
      </div>
      <div className="display">
        <Outlet />
      </div>
    </div>
  );
}
