import React from "react";

import Input from "./Input/Input";
import classes from "./Question.module.css";

const Question = (props) => {
  // Variable to store the type of question is asked.
  let typeOfQuestion;
  if(props.data.type == 'multiple') typeOfQuestion = 'Multiple Choice Question'
  else if(props.data.type == 'single') typeOfQuestion = 'Single Choice Question'
  else if(props.data.type == 'blank') typeOfQuestion = 'Fill in the Blank'
  
  return (
    <form className={classes.Container}>
      <header className={classes.QuestionHeader}>
        <h3>Question {props.data.ques}</h3>
        <p>{props.data.question}</p>
      </header>
      <p className={classes.Choice}>{typeOfQuestion}</p>
      <div className={classes.Options}>
        {props.data.options ? (
          props.data.options.map((option, index) => {
            let ans;
            if (props.data.type == "multiple") {
              if (props.data.answer.includes(option)) ans = true;
            } else {
              if (props.data.answer == option) ans = true;
            }
            return (
              <Input
                type="radio"
                id={index}
                value={option}
                name={props.data.ques}
                key={option + index}
                onChange={props.onChange}
                answer={ans}
                questionType={props.data.type}
              />
            );
          })
        ) : (
          <Input
            type="text"
            name={props.data.ques}
            onChange={props.onChange}
            answer={props.data.answer}
            questionType={props.data.type}
          />
        )}
      </div>
    </form>
  );
};

export default Question;
