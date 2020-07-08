import React from "react";
import "./App.css";
import marked from "marked";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `
      # H1 \n
      ## H2 \n
      [I'm an inline-style link](https://www.google.com) Inline \`code\` has \`back-ticks around\` it 
      \`\`\`javascript
      var s = "JavaScript syntax highlighting";
      alert(s);
      \`\`\` 
      1. First ordered list item 
      2. Another item 
      ⋅⋅* Unordered sub-list. 
      1. Actual numbers don\'t matter, just that it\'s a number 
      ⋅⋅1. Ordered sub-list 
      4. And another item. 
      > Blockquotes are very handy in email to emulate reply text 
      ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1" 
      **asterisks**)`,
      output: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      input: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <input type="textarea" onChange={this.handleClick}></input>
        <div>{marked(this.state.input)}</div>
      </div>
    );
  }
}

export default App;
