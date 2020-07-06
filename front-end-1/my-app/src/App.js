import React from "react";
import quotes from "./quotes.json";
//import { Counter } from "./features/counter/Counter";
import "./App.css";

class Text extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div id="text">
        <h3>{quotes.quotes[0]["quote"]}</h3>
      </div>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Text />
      </div>
    );
  }
}

export default App;
