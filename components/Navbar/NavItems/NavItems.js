import React from "react";

import classes from "./NavItems.module.css";

import Logo from "../../Logo/Logo";
import NavItem from "./NavItem/NavItem";

const NavItems = () => {
  return (
    <ul className={classes.NavigationList}>
      <div className={classes.NavigationStart}>
        <NavItem link href="/">
          <Logo />
        </NavItem>
      </div>

      <div className={classes.NavigationEnd}>
        <div className={classes.NavigationEndFirst}>
          <NavItem href="/orders">
            <div className={classes.Profile}>
              <span className={classes.ProfileIcon}>
                <figure className={classes.ProfileIconImage}>
                  <img src="./assets/pfp.jpg" alt="image" />
                </figure>
              </span>
              <span className={classes.ProfileName}>Ashish Pal</span>
            </div>
          </NavItem>
        </div>
      </div>
    </ul>
  );
};

export default NavItems;
