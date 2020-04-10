import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link> {/* Route 안에서만 Link를 쓸 수 있음 */}
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
