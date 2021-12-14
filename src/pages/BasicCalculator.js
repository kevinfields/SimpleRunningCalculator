import { useState } from "react";

const FunctionCalculator = () => {
  const [first, setFirst] = useState(0);
  const [funct, setFunct] = useState("");
  const [second, setSecond] = useState(0);
  const [total, setTotal] = useState(0);
  const [left, setLeft] = useState(true);
  const [newExpression, setNewExpression] = useState(true);
  const [prev, setPrev] = useState(0);

  const onSwitch = (fn) => {
    console.log("trying to switch...");
    if (newExpression) {
      setFirst(total);
      setSecond(0);
      setPrev(total);
      setTotal(0);
      setNewExpression(false);
    }
    setLeft(!left);
    setFunct(fn);
  };

  const addData = (num) => {
    if (left) {
      if (first === 0 || newExpression) {
        setFirst(num);
        setSecond(0);
        setFunct("");
        setPrev(total);
        setTotal(0);
        setNewExpression(false);
      } else if (first.toString().length > 8) {
        console.log("throw error 1");
      } else {
        setFirst((x) => x + num);
      }
    } else {
      if (second === 0) {
        setSecond(num);
      } else if (second.toString().length > 8) {
        console.log("throw error 2");
      } else {
        setSecond((x) => x + num);
      }
    }
  };

  const onClear = () => {
    setNewExpression(true);
    setFirst(0);
    setSecond(0);
    setTotal(0);
    setFunct("");
  };

  const onEnter = () => {
    setNewExpression(true);
    switch (funct) {
      case "+":
        setTotal(first - -1 * second);
        break;
      case "-":
        setTotal(first - second);
        break;
      case "x":
        setTotal(first * second);
        break;
      case "/":
        setTotal(first / second);
        break;
      default:
        setTotal(first);
        break;
    }
    setLeft(true);
  };

  return (
    <section className="calccontainer">
      <div className="calcscreen">
        <p className="expressionscreen">
          {first !== 0 ? first : ""} {funct} {second !== 0 ? second : ""}
        </p>
        <p className="calcscreentotal">
          {newExpression && first
            ? " = " + total.toString().substring(0, 22)
            : ""}
        </p>
      </div>
      <br />
      <section className="calcbuttons">
        <button className="calcitem" onClick={() => addData("7")}>
          7
        </button>
        <button className="calcitem" onClick={() => addData("8")}>
          8
        </button>
        <button className="calcitem" onClick={() => addData("9")}>
          9
        </button>
        {funct === "" || newExpression ? (
          <button className="calcitem" onClick={() => onSwitch("/")}>
            /
          </button>
        ) : null}
        <br />
        <button className="calcitem" onClick={() => addData("4")}>
          4
        </button>
        <button className="calcitem" onClick={() => addData("5")}>
          5
        </button>
        <button className="calcitem" onClick={() => addData("6")}>
          6
        </button>
        {funct === "" || newExpression ? (
          <button className="calcitem" onClick={() => onSwitch("x")}>
            x
          </button>
        ) : null}
        <br />
        <button className="calcitem" onClick={() => addData("1")}>
          1
        </button>
        <button className="calcitem" onClick={() => addData("2")}>
          2
        </button>
        <button className="calcitem" onClick={() => addData("3")}>
          3
        </button>
        {funct === "" || newExpression ? (
          <button className="calcitem" onClick={() => onSwitch("-")}>
            -
          </button>
        ) : null}
        <br />
        <button className="calcitem" onClick={() => onClear()}>
          Clear All
        </button>

        <button className="calcitem" onClick={() => addData("0")}>
          0
        </button>
        <button className="calcitem" onClick={() => addData(".")}>
          .
        </button>
        {funct === "" || newExpression ? (
          <button className="calcitem" onClick={() => onSwitch("+")}>
            +
          </button>
        ) : null}
        <br />
        {(left && first === 0) || (!left && second === 0) ? (
          <button className="calcitem" onClick={() => addData("-")}>
            +/-
          </button>
        ) : left && first === "-" ? (
          <button className="calcitem" onClick={() => setFirst(0)}>
            +/-
          </button>
        ) : !left && second === "-" ? (
          <button className="calcitem" onClick={() => setSecond(0)}>
            +/-
          </button>
        ) : null}
        {((left && first === 0) || (!left && second === 0)) &&
        prev.toString().length < 10 ? (
          <button className="calcitem" onClick={() => addData(prev.toString())}>
            PREV
          </button>
        ) : null}
        <button className="calcitem" onClick={() => onEnter()}>
          =
        </button>
      </section>
      <br />
      <p className="prevvalue">Previous = {prev}</p>
    </section>
  );
};

export default FunctionCalculator;
