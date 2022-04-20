import React from "react";
import { Outlet } from "react-router-dom";

export default function Hello() {
  return (
    <div>
      <h1>Hello</h1>
      <Outlet />
    </div>
  );
}
