import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../styles/Header.module.css";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={(navInfo) => (navInfo.isActive ? classes.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/post"
            className={(navInfo) => (navInfo.isActive ? classes.active : "")}
          >
            Post
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/posts"
            className={(navInfo) => (navInfo.isActive ? classes.active : "")}
          >
            Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
