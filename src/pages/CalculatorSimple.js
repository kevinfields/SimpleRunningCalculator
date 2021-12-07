import { useState, useEffect } from "react";
import ExpressionsList from "../components/ExpressionsList";

const CalculatorSimple = () => {
  const [first, setFirst] = useState("0");
  const [second, setSecond] = useState("0");
  const [funct, setFunct] = useState("+");
  const [response, setResponse] = useState(0);
  const [expression, setExpression] = useState("");
  const [expressions, setExpressions] = useState([]);
  const [error, setError] = useState(false);
  const [note, setNote] = useState("");
  const [latest, setLatest] = useState("");
  const [saved, setSaved] = useState(false);

  const calculator = (first, second, funct) => {
    switch (funct) {
      //return result of (first)(funct)(second) based on funct variable
      case "+":
        return first - -1 * second;
      case "-":
        return first - second;
      case "x":
        return first * second;
      case "/":
        return first / second;
      case "^":
        let factor;
        if (parseInt(second) === 0) {
          // x^0 = 1
          return 1;
        } else if (parseInt(second) > 1000) {
          //avoid bricking the thing
          setSecond(1000);
          alert("Please enter an exponent less than or equal to 1000.");
        } else if (parseInt(second) > 0) {
          // basic exponential function
          factor = first;
          for (let i = 1; i < second; i++) {
            first = first * factor;
          }
          return first;
        } else {
          //  x^-y === 1/x^y
          factor = first;
          for (let i = 1; i < -1 * second; i++) {
            first = first * factor;
          }
          return 1 / first;
        }
        break;
      default:
        return 0;
    }
  };

  useEffect(() => {
    if (first.length > 16) {
      setFirst("9999999999999999");
    }

    if (second.length > 16) {
      setSecond("9999999999999999");
    }

    setResponse(calculator(first, second, funct));

    if (response.toString().length > 16) {
      setError(true);
    } else if (response.toString().length <= 16 && error === true) {
      setError(false);
    }

    if (note !== "") {
      setExpression(
        first + " " + funct + " " + second + " = " + response + " : " + note
      );
    } else {
      setExpression(first + " " + funct + " " + second + " = " + response);
    }
    setSaved(false);
    for (let i = 0; i < expressions.length; i++) {
      let single = expressions[i].split(" : ");
      console.log("single: " + single);
      if (expressions[i] === expression || expression === single[0]) {
        setSaved(true);
      }
    }
  }, [
    response,
    first,
    second,
    funct,
    note,
    error,
    expression,
    expressions,
    latest,
    saved,
  ]);

  const save = () => {
    if (expressions.length >= 10) {
      setExpressions(expressions.splice(1, 10));
    }
    setLatest(expression);
    setExpressions((prevExpressions) => prevExpressions.concat(expression));
    setNote("");
  };

  const retrieveLastValue = () => {
    let expressionArray = latest.split(" ");
    setFirst(expressionArray[4]);
  };
  return (
    <section className="calc">
      {error ? (
        <p id="warningmessage">
          Warning: Results are only accurate to 17 digits.
        </p>
      ) : null}
      {saved ? <p id="savedmessage">Saved!</p> : null}
      <h2 id="expressionhead">{expression}</h2>
      <button id="savebutton" onClick={save}>
        SAVE
      </button>
      <button id="prevbutton" onClick={retrieveLastValue}>
        PREVIOUS
      </button>
      <br />
      <label className="calclabel" htmlFor="firstinput">
        First Number
      </label>
      <label className="calclabel" htmlFor="fninput">
        Function
      </label>
      <label className="calclabel" htmlFor="secondinput">
        Second Number
      </label>
      <label className="calclabel" id="notelabel" htmlFor="descriptor">
        Note (Optional)
      </label>
      <br />
      <input
        id="firstinput"
        value={first}
        type="number"
        className="numinput"
        onChange={(e) => setFirst(e.target.value)}
        max="99999999999999999"
      />

      <select
        name="fns"
        id="fninput"
        value={funct}
        onChange={(e) => setFunct(e.target.value)}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="x">x</option>
        <option value="/">/</option>
        <option value="^">^</option>
      </select>

      <input
        id="secondinput"
        type="number"
        className="numinput"
        value={second}
        onChange={(e) => setSecond(e.target.value)}
        max="99999999999999999"
      />
      <textarea
        id="descriptor"
        onChange={(e) => setNote(e.target.value)}
        value={note}
      ></textarea>
      <ExpressionsList expressions={expressions} />
    </section>
  );
};

export default CalculatorSimple;
