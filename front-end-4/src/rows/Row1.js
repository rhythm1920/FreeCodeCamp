import React from "react";

export default function (props) {
  return (
    <div className="row">
      <div className="col-xs-3 ">
        <button
          id="one"
          className="btn btn-default"
          onClick={() => {
            props.submitNum("1");
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
            props.submitNum("2");
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
            props.submitNum("3");
          }}
        >
          3
        </button>
      </div>
      <div className="col-xs-3 ">
        <button
          id="add"
          className="btn btn-default"
          onClick={() => props.submitOprt("+")}
        >
          +
        </button>
      </div>
    </div>
  );
}
