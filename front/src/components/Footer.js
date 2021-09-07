import React from "react";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
        <footer>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">About</Link>
            </li>
            <li>
              <Link to="/products">Users</Link>
            </li>
          </ul>
        </footer>
  );
}