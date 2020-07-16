import { createStore } from "redux";
const NUM = "NUM";
const OPRT = "OPRT";
const CLR = "CLR";
const DCML = "DCML";
const EQUAL = "EQUAL";
let displayStr;
const defaultState = { display: "0" };
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
        return { display: action.num };
      } else {
        displayStr = [...state.display.split("")];
        displayStr.push(action.num);
        return { display: displayStr.join("") };
      }
    case OPRT:
      if (state.display !== "0") {
        displayStr = [...state.display.split("")];
        displayStr.push(action.oprt);
        return { display: displayStr.join("") };
      } else {
        console.log("operator not accepted at first place");
        return state;
      }

    case CLR:
      console.log("cleared");
      return defaultState;
    case DCML:
      displayStr = [...state.display.split("")];
      displayStr.push(".");
      return { display: displayStr.join("") };
    case EQUAL:
      console.log("equal");

      return state; // just created action || further development necessary
    default:
      return state;
  }
};

let store = createStore(reducer);
export { handleNum, handleOperator, handleClear, handleDecimal, handleEqual };
export default store;
