import React from "react";
import "./App.css";
import { Grid, Button, Card, CardContent } from "@material-ui/core";
function App() {
  return (
    <div id="container">
      <Grid container spacing={0} justify="center" alignItems="center">
        <Grid item xs="6">
          <Card variant="outlined">
            <CardContent>
              <div id="break-label">Break Length</div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs="2">
          <Card variant="outlined">
            <CardContent>
              <div id="break-length">5</div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs="2">
          <Button
            id="break-increment"
            variant="contained"
            color="Primary"
            style={{ width: "100px", height: "60px" }}
          >
            +
          </Button>
        </Grid>
        <Grid item xs="2">
          <Button
            id="break-decrement"
            variant="contained"
            color="secondary"
            style={{ width: "100px", height: "60px" }}
          >
            -
          </Button>
        </Grid>

        <Grid item xs="6">
          <Card variant="outlined">
            <CardContent>
              <div id="session-label">Session Length</div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs="2">
          <Card variant="outlined">
            <CardContent>
              <div id="session-length">25</div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs="2">
          <Button
            id="session-increment"
            variant="contained"
            color="primary"
            style={{ width: "100px", height: "60px" }}
          >
            +
          </Button>
        </Grid>
        <Grid item xs="2">
          <Button
            id="session-decrement"
            variant="contained"
            color="secondary"
            style={{ width: "100px", height: "60px" }}
          >
            -
          </Button>
        </Grid>

        <Grid item xs="6">
          <Card variant="outlined">
            <CardContent>
              <div id="timer-label">Session</div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs="6">
          <Card variant="outlined">
            <CardContent>
              <div id="time-left">25:00</div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs="6">
          <Button
            id="start_stop"
            variant="contained"
            style={{ backgroundColor: "green", width: "300px" }}
          >
            Start
          </Button>
        </Grid>
        <Grid item xs="6">
          <Button
            id="reset"
            variant="contained"
            style={{ backgroundColor: "yellow", width: "300px" }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
