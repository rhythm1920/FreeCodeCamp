import React from "react";
import "./App.css";
import {
  handleNum,
  handleOperator,
  handleClear,
  handleDecimal,
  handleEqual,
} from "./store";
import { connect } from "react-redux";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }
  render() {
    return (
      <div>
        <div className="fluid-container well" id="container">
          <div className="row">
            <div className="col-xs-9 text-right" id="display">
              <h4>{this.props.display}</h4>
            </div>
            <div className="col-xs-3">
              <button
                id="clear"
                className="btn btn-default"
                onClick={() => {
                  this.props.clear();
                }}
              >
                C
              </button>
            </div>
          </div>
          {
            //////////////////     1||2||3||+    //////////////////////////
          }
          <div className="row">
            <div className="col-xs-3 ">
              <button
                id="one"
                className="btn btn-default"
                onClick={() => {
                  this.props.submitNum("1");
                }}
              >
                1
              </button>
            </div>
            <div className="col-xs-3 ">
              <button
                id="two"
                className="btn btn-default"
                onClick={() => {
                  this.props.submitNum("2");
                }}
              >
                2
              </button>
            </div>
            <div className="col-xs-3">
              <button
                id="three"
                className="btn btn-default"
                onClick={() => {
                  this.props.submitNum("3");
                }}
              >
                3
              </button>
            </div>
            <div className="col-xs-3 ">
              <button
                id="add"
                className="btn btn-default"
                onClick={() => this.props.submitOprt("+")}
              >
                +
              </button>
            </div>
          </div>
          {
            //////////////////  4||5||6||-  //////////////////////
          }
          <div className="row">
            <div className="col-xs-3">
              <button
                id="four"
                className="btn btn-default"
                onClick={() => {
                  this.props.submitNum("4");
                }}
              >
                4
              </button>
            </div>
            <div className="col-xs-3">
              <button
                id="five"
                className="btn btn-default"
                onClick={() => {
                  this.props.submitNum("5");
                }}
              >
                5
              </button>
            </div>
            <div className="col-xs-3">
              <button
                id="six"
                className="btn btn-default"
                onClick={() => {
                  this.props.submitNum("6");
                }}
              >
                6
              </button>
            </div>
            <div className="col-xs-3">
              <button
                id="subtract"
                className="btn btn-default"
                onClick={() => this.props.submitOprt("-")}
              >
                -
              </button>
            </div>
          </div>
          {
            //////////////////////  7||8||9||x  ///////////////////////
          }
          <div className="row">
            <div className="col-xs-3">
              <button
                id="seven"
                className="btn btn-default"
                onClick={() => {
                  this.props.submitNum("7");
                }}
              >
                7
              </button>
            </div>
            <div className="col-xs-3">
              <button
                id="eight"
                className="btn btn-default"
                onClick={() => {
                  this.props.submitNum("8");
                }}
              >
                8
              </button>
            </div>
            <div className="col-xs-3">
              <button
                id="nine"
                className="btn btn-default"
                onClick={() => {
                  this.props.submitNum("9");
                }}
              >
                9
              </button>
            </div>
            <div className="col-xs-3">
              <button
                id="multiply"
                className="btn btn-default"
                onClick={() => this.props.submitOprt("x")}
              >
                x
              </button>
            </div>
          </div>
          {
            ////////////////////////// .||0||=|///////////////////////////
          }
          <div className="row">
            <div className="col-xs-3">
              <button
                id="decimal"
                className="btn btn-default"
                onClick={() => this.props.submitDecimal()}
              >
                .
              </button>
            </div>
            <div className="col-xs-3">
              <button
                id="zero"
                className="btn btn-default"
                onClick={() => {
                  this.props.submitNum("0");
                }}
              >
                0
              </button>
            </div>
            <div className="col-xs-3">
              <button
                id="equals"
                className="btn btn-default"
                onClick={() => {
                  this.props.submitEqual();
                }}
              >
                =
              </button>
            </div>
            <div className="col-xs-3">
              <button
                id="divide"
                className="btn btn-default"
                onClick={() => this.props.submitOprt("/")}
              >
                /
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { display: state.display };
}
function mapDispatchToProps(dispatch) {
  return {
    submitNum: (num) => dispatch(handleNum(num)),
    clear: () => {
      dispatch(handleClear());
    },
    submitOprt: (oprt) => dispatch(handleOperator(oprt)),
    submitDecimal: () => {
      dispatch(handleDecimal());
    },
    submitEqual: () => dispatch(handleEqual()),
  };
}
let ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedComponent;
