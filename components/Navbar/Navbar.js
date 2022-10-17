// import Logo from "../Logo/Logo";
import React from "react";
import classes from "./Navbar.module.css";
import NavItems from "./NavItems/NavItems";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav className={classes.Navbar}>
      <header className="Hide">
        <h1>Navigation Bar</h1>
      </header>
      <NavItems />
    </nav>
  );
};

export default Navbar;
