import React from "react";
import quotes from "./quotes.json";
import { random, floor } from "mathjs";
//import { Counter } from "./features/counter/Counter";
import "./App.css";

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="text" className="text-center">
        <h3>{quotes.quotes[this.props.index]["quote"]}</h3>
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
      <div id="author" className="text-center">
        <h3>-{quotes.quotes[this.props.index]["author"]}</h3>
      </div>
    );
  }
}
class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <button className="btn btn-block btn-success">
          {" "}
          <a id="tweet-quote" href="twitter.com/intent/tweet">
            Tweet
          </a>
        </button>
      </div>
    );
  }
}
let num = floor(random(0, quotes.quotes.length));
console.log(num);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNum: floor(random(0, quotes.quotes.length)),
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(state) {
    this.setState({
      randomNum: floor(random(0, quotes.quotes.length)),
    });
  }

  render() {
    console.log(this.state.randomNum);
    return (
      <div>
        <Text index={this.state.randomNum} />
        <Author index={this.state.randomNum} />
        <Tweet />
        <button
          id="new-quote"
          onClick={this.handleClick}
          className="btn btn-block btn-info"
        >
          New Quote
        </button>
      </div>
    );
  }
}

export default App;
