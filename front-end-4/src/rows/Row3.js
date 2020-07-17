import React from "react";
function row3(props) {
  return (
    <div className="row">
      <div className="col-xs-3">
        <button
          id="seven"
          className="btn btn-default"
          onClick={() => {
            props.submitNum("7");
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
            props.submitNum("8");
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
            props.submitNum("9");
          }}
        >
          9
        </button>
      </div>
      <div className="col-xs-3">
        <button
          id="multiply"
          className="btn btn-default"
          onClick={() => props.submitOprt("x")}
        >
          x
        </button>
      </div>
    </div>
  );
}
export default row3;
