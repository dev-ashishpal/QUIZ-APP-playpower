import React, { useState, useRef, useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { BsArrowRight, BsXLg } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SEO from "../components/SEO";

// import { getDoc, doc } from "firebase/firestore";

import { quiz } from "../external";

import classes from "../styles/Home.module.css";
import Box from "../components/Box/Box";
import Button from "../components/UI/Button/Button";

import { InvitationContext } from "../context/invitation";

const Home = () => {
  // calling router.
  const router = useRouter();

  // creating a state.
  const [expectedCode, setExpectedCode] = useState();

  // using context api
  const { setValue } = useContext(InvitationContext);

  // Creating Ref for DOM Manipulation on small screen device.
  const layoutRef = useRef();
  const layoutRightRef = useRef();
  const layoutLeftRef = useRef();

  // Function to toggle screen on small screen device.
  const toggleLayout = () => {
    layoutRef.current.classList.toggle(classes.LayoutToggle);
    layoutRightRef.current.classList.toggle(classes.LayoutRightToggle);
    layoutLeftRef.current.classList.toggle(classes.LayoutLeftToggle);
  };

  // Function to handle change in input
  const inputChangeHandler = (e) => {
    const val = e.target.value;
    setValue(e.target.value);
    setExpectedCode(e.target.value);
  };

  // Function to check if invitation code is exists or not.
  const joinAssess = async () => {
    if(expectedCode in quiz) {
      router.push('/instruction');
    } else {
      toast.error("Invalid Invitation code!!!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <SEO title="Homepage">
    <section>
      {/* popup modal on error. */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className={classes.Layout} ref={layoutRef}>
        <div className={classes.LayoutLeft} ref={layoutLeftRef}>
          <header className={classes.ContainerHeader}>
            <h1>Prev Quiz</h1>
            <div onClick={toggleLayout} className={classes.NewQuiz}>
              New Quiz
            </div>
          </header>
          <div className={classes.Container}>
            <div className={classes.ContainerList}>
              <Box>
                <div className={classes.ContainerBox}>
                  <h2 className={classes.BoxTitle}>This is quiz 1.</h2>
                  <div className={classes.Score}>Your score is 70%</div>
                  <div className={classes.DetailBtn}>
                    <button>
                      <span>View Details</span>
                      <span className={classes.ArrowIcon}>
                        <BsArrowRight />
                      </span>
                    </button>
                  </div>
                  <div className={classes.ContainerBorder}>&nbsp;</div>
                </div>
              </Box>
              <Box>
                <div className={classes.ContainerBox}>
                  <h2 className={classes.BoxTitle}>This is quiz 1.</h2>
                  <div className={classes.Score}>Your score is 70%</div>
                  <div className={classes.DetailBtn}>
                    <button>
                      <span>View Details</span>
                      <span className={classes.ArrowIcon}>
                        <BsArrowRight />
                      </span>
                    </button>
                  </div>
                  <div className={classes.ContainerBorder}>&nbsp;</div>
                </div>
              </Box>
              <Box>
                <div className={classes.ContainerBox}>
                  <h2 className={classes.BoxTitle}>This is quiz 1.</h2>
                  <div className={classes.Score}>Your score is 70%</div>
                  <div className={classes.DetailBtn}>
                    <button>
                      <span>View Details</span>
                      <span className={classes.ArrowIcon}>
                        <BsArrowRight />
                      </span>
                    </button>
                  </div>
                  <div className={classes.ContainerBorder}>&nbsp;</div>
                </div>
              </Box>
              <Box>
                <div className={classes.ContainerBox}>
                  <h2 className={classes.BoxTitle}>This is quiz 1.</h2>
                  <div className={classes.Score}>Your score is 70%</div>
                  <div className={classes.DetailBtn}>
                    <button>
                      <span>View Details</span>
                      <span className={classes.ArrowIcon}>
                        <BsArrowRight />
                      </span>
                    </button>
                  </div>
                  <div className={classes.ContainerBorder}>&nbsp;</div>
                </div>
              </Box>
              <Box>
                <div className={classes.ContainerBox}>
                  <h2 className={classes.BoxTitle}>This is quiz 1.</h2>
                  <div className={classes.Score}>Your score is 70%</div>
                  <div className={classes.DetailBtn}>
                    <button>
                      <span>View Details</span>
                      <span className={classes.ArrowIcon}>
                        <BsArrowRight />
                      </span>
                    </button>
                  </div>
                  <div className={classes.ContainerBorder}>&nbsp;</div>
                </div>
              </Box>
              <Box>
                <div className={classes.ContainerBox}>
                  <h2 className={classes.BoxTitle}>This is quiz 1.</h2>
                  <div className={classes.Score}>Your score is 70%</div>
                  <div className={classes.DetailBtn}>
                    <button>
                      <span>View Details</span>
                      <span className={classes.ArrowIcon}>
                        <BsArrowRight />
                      </span>
                    </button>
                  </div>
                  <div className={classes.ContainerBorder}>&nbsp;</div>
                </div>
              </Box>
            </div>
          </div>
        </div>
        <div className={classes.LayoutRight} ref={layoutRightRef}>
          <div className={classes.Join}>
            <header className={classes.JoinHeader}>
              <h1>Join the Quiz.</h1>
              <div className={classes.CrossIcon} onClick={toggleLayout}>
                <BsXLg />
              </div>
            </header>
            <div className={classes.JoinForm}>
              <input
                onChange={inputChangeHandler}
                placeholder="Enter invite code: eg- 12345"
                type="text"
              />
              <Button onClick={joinAssess} color="green">
                JOIN
              </Button>
            </div>
          </div>
          <div className={classes.Divider}>or</div>
          <div className={classes.Join}>
            <div className={classes.JoinForm}>
              <Button color="blue">CREATE A QUIZ</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </SEO>
  );
};

export default Home;
