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
class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>{quotes.quotes[0]["author"]}</h3>
      </div>
    );
  }
}
class Tweet extends React.Componen {
  constructor(props) {
    super(props);
    state = {};
  }
  render() {
    return (
      <div>
        <a id="tweet-quote">
          <button></button>
        </a>
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
        <Author />
        <Tweet />
      </div>
    );
  }
}

export default App;
