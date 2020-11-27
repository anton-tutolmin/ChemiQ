import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-4 px1">
        <a href="#" className="brand-logo">
          ChemiQ
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">Main</a>
          </li>
          <li>
            <a href="/">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
