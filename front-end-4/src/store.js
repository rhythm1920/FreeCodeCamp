import { createStore } from "redux";
import { evaluate } from "mathjs";
const NUM = "NUM";
const OPRT = "OPRT";
const CLR = "CLR";
const DCML = "DCML";
const EQUAL = "EQUAL";
let displayStr;
const defaultState = {
  display: "0",
  isDecimalUsed: false,
  isOperatorUsed: false,
};
let oprtList = ["+", "*", "/"];
const handleNum = (input) => {
  return { type: NUM, num: input };
};
const handleOperator = (input) => {
  return { type: OPRT, oprt: input };
};
const handleClear = () => {
  return { type: CLR };
};
const handleDecimal = () => {
  return { type: DCML };
};
const handleEqual = () => {
  return { type: EQUAL };
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case NUM:
      if (state.display === "0") {
        return Object.assign({}, state, { display: action.num });
      } else {
        displayStr = state.display.toString();
        displayStr = [...displayStr.split("")];
        displayStr.push(action.num);
        return Object.assign({}, state, {
          display: displayStr.join(""),
          isOperatorUsed: false,
        });
      }
    case OPRT:
      if (state.display !== "0" && state.isOperatorUsed === false) {
        displayStr = state.display.toString();
        displayStr = [...displayStr.split("")];
        displayStr.push(action.oprt);
        return Object.assign({}, state, {
          display: displayStr.join(""),
          isDecimalUsed: false,
          isOperatorUsed: true,
        });
      } else if (state.isOperatorUsed === true && action.oprt !== "-") {
        displayStr = state.display.toString();
        displayStr = [...displayStr.split("")];
        displayStr.splice(displayStr.length - 1, 1, action.oprt);
        return Object.assign({}, state, {
          display: displayStr.join(""),
          isDecimalUsed: false,
          isOperatorUsed: true,
        });
      } else if (action.oprt === "-") {
        displayStr = state.display.toString();
        displayStr = [...displayStr.split("")];
        displayStr.push(action.oprt);
        return Object.assign({}, state, {
          display: displayStr.join(""),
          isDecimalUsed: false,
          isOperatorUsed: true,
        });
      } else {
        return state;
      }

    case CLR:
      console.log("cleared");
      return defaultState;
    case DCML:
      if (state.isDecimalUsed === false) {
        displayStr = state.display.toString();
        displayStr = [...displayStr.split("")];
        displayStr.push(".");
        return Object.assign({}, state, {
          display: displayStr.join(""),
          isDecimalUsed: true,
        });
      } else {
        return state;
      }

    case EQUAL:
      console.log("equal");
      displayStr = state.display.toString();
      displayStr = [...displayStr.split("")];
      for (let x = 0; x <= displayStr.length; x++) {
        if (
          displayStr[x] === ("+" || "/" || "*") &&
          displayStr[x - 1] === ("+" || "/" || "*")
        ) {
          displayStr.splice(x - 1, 1);
        }
      }
      console.log(displayStr);
      return Object.assign({}, state, {
        display: evaluate(displayStr.join("")),
      });

    default:
      return state;
  }
};

let store = createStore(reducer);
export { handleNum, handleOperator, handleClear, handleDecimal, handleEqual };
export default store;
