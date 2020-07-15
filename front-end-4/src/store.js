import { createStore } from "redux";
let NUM = "NUM";
let displayStr;
let handleNum = (input) => {
  return { type: NUM, num: input };
};
let reducer = (state = { display: "0" }, action) => {
  switch (action.type) {
    case NUM:
      if (state.display === "0") {
        return { display: action.num };
      } else {
        displayStr = [...state.display.split("")];
        displayStr.push(action.num);
        return { display: displayStr.join("") };
      }
    default:
      return state;
  }
};

let store = createStore(reducer);
export { handleNum };
export default store;
