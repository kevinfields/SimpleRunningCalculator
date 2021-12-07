import OldExpression from "./OldExpression";

const ExpressionsList = (props) => {
  return (
    <section className="expressionscontainer">
      {props.expressions.map((expression) => (
        <OldExpression
          equation={expression}
          onClick={props.onClick}
          key={Math.floor(Math.random() * 1000000000)}
        />
      ))}
    </section>
  );
};

export default ExpressionsList;
