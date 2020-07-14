import React from "react";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="fluid-container well" id="container">
          <div className="row">
            <div className="col-xs-9" id="display">
              <label></label>
            </div>
            <div className="col-xs-3">
              <button id="clear" className="btn btn-default">
                C
              </button>
            </div>
          </div>
          {
            //////////////////     1||2||3||+    //////////////////////////
          }
          <div className="row">
            <div className="col-xs-3 ">
              <button id="one" className="btn btn-default">
                1
              </button>
            </div>
            <div className="col-xs-3 ">
              <button id="two" className="btn btn-default">
                2
              </button>
            </div>
            <div className="col-xs-3">
              <buttom id="three" className="btn btn-default">
                3
              </buttom>
            </div>
            <div className="col-xs-3 ">
              <button id="add" className="btn btn-default">
                +
              </button>
            </div>
          </div>
          {
            //////////////////  4||5||6||-  //////////////////////
          }
          <div className="row">
            <div className="col-xs-3">
              <button id="four" className="btn btn-default">
                4
              </button>
            </div>
            <div className="col-xs-3">
              <button id="five" className="btn btn-default">
                5
              </button>
            </div>
            <div className="col-xs-3">
              <buttom id="six" className="btn btn-default">
                6
              </buttom>
            </div>
            <div className="col-xs-3">
              <button id="subtract" className="btn btn-default">
                -
              </button>
            </div>
          </div>
          {
            //////////////////////  7||8||9||x  ///////////////////////
          }
          <div className="row">
            <div className="col-xs-3">
              <button id="seven" className="btn btn-default">
                7
              </button>
            </div>
            <div className="col-xs-3">
              <button id="eight" className="btn btn-default">
                8
              </button>
            </div>
            <div className="col-xs-3">
              <buttom id="nine" className="btn btn-default">
                9
              </buttom>
            </div>
            <div className="col-xs-3">
              <button id="multiply" className="btn btn-default">
                x
              </button>
            </div>
          </div>
          {
            ////////////////////////// .||0||=|///////////////////////////
          }
          <div className="row">
            <div className="col-xs-3">
              <button id="decimal" className="btn btn-default">
                .
              </button>
            </div>
            <div className="col-xs-3">
              <button id="zero" className="btn btn-default">
                0
              </button>
            </div>
            <div className="col-xs-3">
              <buttom id="equals" className="btn btn-default">
                =
              </buttom>
            </div>
            <div className="col-xs-3">
              <button id="divide" className="btn btn-default">
                /
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
