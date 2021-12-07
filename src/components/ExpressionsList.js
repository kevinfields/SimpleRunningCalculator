import OldExpression from "./OldExpression";

const ExpressionsList = (props) => {
  return (
    <section className="expressionscontainer">
      {props.expressions.map((expression) => (
        <OldExpression equation={expression} onClick={props.onClick} />
      ))}
    </section>
  );
};

export default ExpressionsList;
