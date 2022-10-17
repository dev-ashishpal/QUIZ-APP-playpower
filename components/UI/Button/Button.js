import React from "react";
import PropTypes from "prop-types";

import classes from "./Button.module.css";

const Button = (props) => {
  const color = [classes.Btn];
  if (props.color == "green") {
    color.push(classes.Green);
  } else if (props.color == "blue") {
    color.push(classes.Blue);
  }
  
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={color.join(" ")}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
