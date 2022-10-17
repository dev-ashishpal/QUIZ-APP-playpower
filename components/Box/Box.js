import React from "react";
import classes from "./Box.module.css";

const Box = (props) => {
  return <article className={classes.Box}>{props.children}</article>;
};

export default Box;
