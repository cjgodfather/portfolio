import React from "react";

const Navbar = props => {
  return (
    <nav id="nav">
      <a id="logo" href="/">
        <img src="/pictures/logo.png" width="50px" height="50px" alt="logo" />
      </a>
      <a onClick={props.showDropdown} id="dropdown" />
      <ul className={props.open}>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#projects">
          <li>Project</li>
        </a>
        <a href="#blogs">
          <li>Blogs</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
