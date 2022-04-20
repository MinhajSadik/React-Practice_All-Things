import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/homepage">HomePage</NavLink>
        </li>
      </ul>
    </nav>
  );
}
