import React from "react";

const OldExpression = (props) => {
  console.log("making an expression: " + props.equation);
  return (
    <div>
      <p className="expressionitem" onClick={props.onClick}>
        {props.equation}
      </p>
    </div>
  );
};

export default OldExpression;
