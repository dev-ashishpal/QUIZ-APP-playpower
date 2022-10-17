import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";

import classes from "./instruction.module.css";

import { useRouter } from "next/router";
import { InvitationContext } from "../../context/invitation";
import SEO from "../../components/SEO";

const Instruction = () => {
  // Declaring and Initializing variables.
  const router = useRouter();
  const { value } = useContext(InvitationContext);
  const [checked, setChecked] = useState(false);

  // Function to check if user agreed to Terms.
  const onChangeBox = (event) => {
    if (event.target.value) {
      setChecked(!checked);
    }
  };

  // Redirect to Homepage if invitation code not found.
  useEffect(() => {
    if (!value) router.replace("/");
  }, [value]);


  return (
    <SEO title="Instruction">
      <section className={classes.Instruction}>
        <header className={classes.InstructionHeader}>
          <h1>Please read the instructions carefully!</h1>
        </header>
        <div className={classes.Container}>
          <h2>General Instruction</h2>
          <ul>
            <li>
              Total duration of JEE-Main - 40503618_BTECH 8th Jan 2020 Shift 1
              is 180 min.
            </li>
            <li>
              The clock will be set at the server. The countdown timer in the
              top right corner of screen will display the remaining time
              available for you to complete the examination. When the timer
              reaches zero, the examination will end by itself. You will not be
              required to end or submit your examination.
            </li>
            <li>
              You can click on the arrow which apperes to the left of question
              palette to collapse the question palette thereby maximizing the
              question window. To view the question palette again, you can click
              on which appears on the right side of question window.
            </li>
            <li>
              You can click on your Profile image on top right corner of your
              screen to change the language during the exam for entire question
              paper. On clicking of Profile image you will get a drop-down to
              change the question content to the desired language.
            </li>
            <li>
              You can click on to navigate to the bottom and to navigate to top
              of the question are, without scrolling.
            </li>
            <li>
              To answer a question, Click on the question number in the Question
              Palette at the right of your screen to go to that numbered
              question directly. Note that using this option does NOT save your
              answer to the current question.
            </li>
            <li>
              To change your answer to a question that has already been
              answered, first select that question for answering and then follow
              the procedure for answering that type of question.
            </li>
            <li>
              You can click on your Profile image on top right corner of your
              screen to change the language during the exam for entire question
              paper. On clicking of Profile image you will get a drop-down to
              change the question content to the desired language.
            </li>
          </ul>
          <div className={classes.CheckBox}>
            <label>
              <input type="checkbox" onChange={onChangeBox} />
              &nbsp;I have read all the instructions and is read to proceed.
            </label>
          </div>
          <div className={classes.Btn}>
            <Link href={`/assessment/${value}`}>
              <button disabled={!checked} color="green">
                START TEST
              </button>
            </Link>
          </div>
        </div>
      </section>
    </SEO>
  );
};

export default Instruction;
