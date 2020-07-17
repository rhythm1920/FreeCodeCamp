import React from "react";
function row4(props) {
  return (
    <div className="row">
      <div className="col-xs-3">
        <button
          id="decimal"
          className="btn btn-default"
          onClick={() => props.submitDecimal()}
        >
          .
        </button>
      </div>
      <div className="col-xs-3">
        <button
          id="zero"
          className="btn btn-default"
          onClick={() => {
            props.submitNum("0");
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
            props.submitEqual();
          }}
        >
          =
        </button>
      </div>
      <div className="col-xs-3">
        <button
          id="divide"
          className="btn btn-default"
          onClick={() => props.submitOprt("/")}
        >
          /
        </button>
      </div>
    </div>
  );
}
export default row4;
