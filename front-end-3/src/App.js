import React from "react";
import "./App.css";
import sound1 from "./audio/audio1.wav";
import sound2 from "./audio/audio2.wav";
import sound3 from "./audio/audio3.wav";
import sound4 from "./audio/audio4.wav";
import sound5 from "./audio/audio5.wav";
import sound6 from "./audio/audio6.wav";
import sound7 from "./audio/audio9.wav";
import sound8 from "./audio/audio8.wav";
import sound9 from "./audio/audio9.wav";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="display"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <button className="drum-pad" id="Q-pad">
                <h1>Q</h1>
                <audio src={sound1} type="audio/wav" className="clip" id="Q">
                  Your browser does not support this format
                </audio>
              </button>
            </div>
            <div className="col-sm-4">
              <button className="drum-pad" id="W-pad">
                <h1>W</h1>
                <audio src={sound2} type="audio/wav" className="clip" id="W">
                  Your browser does not support this format
                </audio>
              </button>
            </div>
            <div className="col-sm-4">
              <button className="drum-pad" id="E-pad">
                <h1>E</h1>
                <audio src={sound3} type="audio/wav" className="clip" id="E">
                  Your browser does not support this format
                </audio>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4">
              <button className="drum-pad" id="A-pad">
                <h1>A</h1>
                <audio src={sound4} type="audio/wav" className="clip" id="A">
                  Your browser does not support this format
                </audio>
              </button>
            </div>
            <div className="col-xs-4">
              <button className="drum-pad" id="S-pad">
                <h1>S</h1>
                <audio src={sound5} type="audio/wav" className="clip" id="S">
                  Your browser does not support this format
                </audio>
              </button>
            </div>
            <div className="col-xs-4">
              <button className="drum-pad" id="D-pad">
                <h1>D</h1>
                <audio src={sound6} type="audio/wav" className="clip" id="D">
                  Your browser does not support this format
                </audio>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4">
              <button className="drum-pad" id="Z-pad">
                <h1>Z</h1>
                <audio src={sound7} type="audio/wav" className="clip" id="Z">
                  Your browser does not support this format
                </audio>
              </button>
            </div>
            <div className="col-xs-4">
              <button className="drum-pad" id="X-pad">
                <h1>X</h1>
                <audio src={sound8} type="audio/wav" className="clip" id="X">
                  Your browser does not support this format
                </audio>
              </button>
            </div>
            <div className="col-xs-4">
              <button className="drum-pad" id="C-pad">
                <h1>C</h1>
                <audio src={sound9} type="audio/wav" className="clip" id="C">
                  Your browser does not support this format
                </audio>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
