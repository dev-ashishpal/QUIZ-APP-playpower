import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import PropTypes from "prop-types";

const Modal = (props) => {
  return props.show ? (
    <Fragment>
      <Backdrop clicked={props.clicked} show={props.show} />
      <div className={classes.Modal}>{props.children}</div>
    </Fragment>
  ) : null;
};

Modal.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func,
};

export default Modal;
