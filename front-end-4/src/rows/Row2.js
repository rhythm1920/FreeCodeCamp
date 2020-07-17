import React from "react";

export default function Row1(props) {
  return (
    <div className="row">
      <div className="col-xs-3">
        <button
          id="four"
          className="btn btn-default"
          onClick={() => {
            props.submitNum("4");
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
            props.submitNum("5");
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
            props.submitNum("6");
          }}
        >
          6
        </button>
      </div>
      <div className="col-xs-3">
        <button
          id="subtract"
          className="btn btn-default"
          onClick={() => props.submitOprt("-")}
        >
          -
        </button>
      </div>
    </div>
  );
}
