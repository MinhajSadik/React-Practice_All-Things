import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
