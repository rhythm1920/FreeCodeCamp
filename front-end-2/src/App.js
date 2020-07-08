import React from "react";
import "./App.css";
import { marked } from "marked";
function App() {
  return <div>{marked(<h1>Hello</h1>)}</div>;
}

export default App;
