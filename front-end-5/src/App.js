import React, { useState, useEffect } from "react";
import beepSound from "./Computer-beep-beeping-2-www.FesliyanStudios.com.mp3";
import "./App.css";
import { Grid, Button, Card, CardContent } from "@material-ui/core";
import Timer from "easytimer.js";
let timer = new Timer();
function App() {
  const [sessionLength, setSessionLength] = useState(25); //declaring session length in minutes
  const [breakLength, setBreakLength] = useState(5); // declaring break length in minutes
  const [isThisSession, setIsThisSession] = useState(true); //boolean for deciding between session and break
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60); // time left in seconds
  let timerHandler = () => {
    document.getElementById("beep").play();
    timer.stop(); //for preventing starting from default value(due to multiple callback)
    setIsThisSession(!isThisSession);
    if (isThisSession) {
      timer.start({
        //start break after session ends
        countdown: true,
        startValues: {
          minutes: breakLength,
        },
      });
    } else {
      timer.start({
        //start session after break ends
        countdown: true,
        startValues: {
          minutes: sessionLength,
        },
      });
    }
  };
  useEffect(() => {
    timer.addEventListener("secondsUpdated", function () {
      setTimeLeft(
        timer.getTimeValues().minutes * 60 + timer.getTimeValues().seconds //converting time from mm:ss to seconds
      );
    });
    return timer.removeEventListener("secondsUpdated", function () {
      setTimeLeft(
        timer.getTimeValues().minutes * 60 + timer.getTimeValues().seconds //converting time from mm:ss to seconds
      );
    });
  });
  useEffect(() => {
    timer.addEventListener("targetAchieved", () => timerHandler());
    return () => {
      timer.removeEventListener("targetAchieved", () => timerHandler());
    };
  });

  return (
    <div id="container">
      <audio id="beep" type="audio/mp3" src={beepSound}></audio>
      <div style={{ fontSize: "100px" }}>
        {Math.floor(timeLeft / 60) < 10 && "0"}
        {Math.floor(timeLeft / 60).toString()}:
        {timeLeft - Math.floor(timeLeft / 60) * 60 < 10 && "0"}
        {(timeLeft - Math.floor(timeLeft / 60) * 60).toString()}
      </div>
      <Grid container spacing={0} justify="center" alignItems="center">
        {/*outer grid*/}
        <Grid item xs={6}>
          <Card variant="outlined">
            <CardContent>
              <div id="break-label">Break Length</div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card variant="outlined">
            <CardContent>
              <div id="break-length">{breakLength}</div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Button
            id="break-increment"
            variant="contained"
            color="primary"
            style={{ width: "100px", height: "60px" }}
            onClick={() => {
              if (breakLength + 1 > 60) {
                setBreakLength(60);
              } else {
                setBreakLength((prevBreakLength) => {
                  return prevBreakLength + 1;
                });
              }
            }}
          >
            +
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            id="break-decrement"
            variant="contained"
            color="secondary"
            style={{ width: "100px", height: "60px" }}
            onClick={() => {
              if (breakLength - 1 <= 0) {
                setBreakLength(1);
              } else {
                setBreakLength((prevBreakLength) => prevBreakLength - 1);
              }
            }}
          >
            -
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Card variant="outlined">
            <CardContent>
              <div id="session-label">Session Length</div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card variant="outlined">
            <CardContent>
              <div id="session-length">{sessionLength}</div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Button
            id="session-increment"
            variant="contained"
            color="primary"
            style={{ width: "100px", height: "60px" }}
            onClick={() => {
              if (sessionLength + 1 > 60) {
                setSessionLength(60);
              } else {
                setSessionLength(sessionLength + 1);
              }
            }}
          >
            +
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            id="session-decrement"
            variant="contained"
            color="secondary"
            style={{ width: "100px", height: "60px" }}
            onClick={() => {
              if (sessionLength - 1 <= 0) {
                setSessionLength(1);
                if (isThisSession) {
                  setTimeLeft(1 * 60);
                }
              } else {
                setSessionLength(sessionLength - 1);
                if (isThisSession) {
                  setTimeLeft((sessionLength - 1) * 60);
                }
              }
            }}
          >
            -
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Card variant="outlined">
            <CardContent>
              <div id="timer-label">{isThisSession ? "Session" : "Break"}</div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card variant="outlined">
            <CardContent>
              <div id="time-left">
                {Math.floor(timeLeft / 60) < 10 && "0"}
                {/*for displaying time in mm:ss format */}
                {Math.floor(timeLeft / 60).toString()}:
                {timeLeft - Math.floor(timeLeft / 60) * 60 < 10 && "0"}
                {(timeLeft - Math.floor(timeLeft / 60) * 60).toString()}
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Button
            id="start_stop"
            variant="contained"
            style={{ backgroundColor: "green", width: "300px" }}
            onClick={() => {
              if (!timer.isRunning()) {
                timer.start({
                  countdown: true,
                  startValues: {
                    minutes: isThisSession ? sessionLength : breakLength,
                  },
                });
              } else {
                timer.pause();
              }
            }}
          >
            {timer.isRunning() ? "Stop" : "Start"}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            id="reset"
            variant="contained"
            style={{ backgroundColor: "yellow", width: "300px" }}
            onClick={() => {
              timer.reset();
              timer.pause();
              document.getElementById("beep").pause();
              document.getElementById("beep").currentTime = 0;
              setTimeLeft(25 * 60);
              setIsThisSession(true);
              setSessionLength(25);
              setBreakLength(5);
            }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
