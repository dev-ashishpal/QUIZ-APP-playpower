import React, { Fragment } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const labelColor = [classes.Label];
  if (props.answer) {
    labelColor.push(classes.Green);
  }

  let inputData;
  if (props.questionType == "single") {
    inputData = (
      <Fragment>
        <input
          className={classes.Input}
          type={props.type}
          id={props.id}
          value={props.value}
          name={props.name}
          onChange={props.onChange}
        />
        <label className={labelColor.join(" ")} htmlFor={props.id}>
          {props.value}
        </label>
      </Fragment>
    );
  } else if (props.questionType == "image") {
    inputData = (
      <Fragment>
        <input
          className={classes.Input}
          type={props.type}
          id={props.id}
          value={props.value}
          name={props.name}
          onChange={props.onChange}
        />
        <label className={labelColor.join(" ")} htmlFor={props.id}>
          <figure className={classes.Image}>
            <img src={props.value} alt="image" />
          </figure>
        </label>
      </Fragment>
    );
  } else if (props.questionType == "blank") {
    inputData = (
      <Fragment>
        <input
          className={classes.Input}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          placeholder="Enter your answer here."
        />
      </Fragment>
    );
  } else if (props.questionType == "multiple") {
    inputData = (
      <Fragment>
        <input
          className={classes.Input}
          type="checkbox"
          id={props.id}
          value={props.value}
          name={props.name}
          onChange={props.onChange}
        />
        <label className={labelColor.join(" ")} htmlFor={props.id}>
          {props.value}
        </label>
      </Fragment>
    );
  }

  return <div className={classes.Container}>{inputData}</div>;
};

export default Input;
