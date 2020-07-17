import React from "react";
import "./App.css";
import Row1 from "./rows/Row1";
import Row2 from "./rows/Row2";
import Row3 from "./rows/Row3";
import Row4 from "./rows/Row4";
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
          <Row1
            submitNum={(num) => this.props.submitNum(num)}
            submitOprt={(oprt) => this.props.submitOprt(oprt)}
          />
          {
            //////////////////  4||5||6||-  //////////////////////
          }
          <Row2
            submitNum={(num) => this.props.submitNum(num)}
            submitOprt={(oprt) => this.props.submitOprt(oprt)}
          />
          {
            /////////////////// 7||8||9||x  /////////////////////////
          }
          <Row3
            submitNum={(num) => this.props.submitNum(num)}
            submitOprt={(oprt) => this.props.submitOprt(oprt)}
          />
          {
            ////////////////////////// .||0||=|///////////////////////////
          }
          <Row4
            submitDecimal={() => this.props.submitDecimal()}
            submitEqual={() => this.props.submitEqual()}
            submitNum={(num) => this.props.submitNum(num)}
            submitOprt={(oprt) => this.props.submitOprt(oprt)}
          />
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
