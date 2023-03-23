import "./styles.css";
import React from "react";

export default function App() {
  const [toggleNav, setToggleNav] = React.useState(true);
  return (
    <div className="App">
      <div class="navbar">
        <div class="div">
          <button
            className="show"
            onClick={() => setToggleNav((prev) => !prev)}
          >
            {toggleNav ? "-" : "+"}
          </button>
          <h1>LOGO</h1>
        </div>
        {toggleNav ? (
          <ul class="menu-links">
            <li>Home</li>
            <li>Menu</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
