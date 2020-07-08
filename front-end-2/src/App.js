import React from "react";
import "./App.css";
let marked = require("marked");
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `
# React Markdown Previewer!\n
## This is a sub-heading..
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~
There's also [links](https://ashusingh.me), and
>   Block Quotes!\n
this is \`code\`
\`\`\`     
<html>
  <div>
  </div>
</html>
\`\`\`
1. First ordered list item
2. Another item
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")   
`,
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
        <div>
          <textarea
            id="editor"
            onChange={this.handleClick}
            value={this.state.input}
          ></textarea>
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(this.state.input) }}
        ></div>
      </div>
    );
  }
}

export default App;
