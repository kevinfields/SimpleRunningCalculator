import { useState } from "react";
import getFactors from "../functions/getFactors";

const NumberData = () => {
  const [number, setNumber] = useState("0");
  const [colors, setColors] = useState(0);

  const getNumbers = (fn) => {
    switch (fn) {
      case "sqrt":
        return Math.sqrt(number);
      case "num":
        return number;
      case "square":
        return number * number;
      case "sr/sqrt":
        return (number * number) / Math.sqrt(number);
      case "num/sqrt":
        return number / Math.sqrt(number);
      case "factors":
        return getFactors(number);
      case "factorials":
        let multiplier = 1;
        if (number < 100) {
          for (let i = 1; i <= number; i++) {
            multiplier = i * multiplier;
          }
          return multiplier;
        } else {
          return "Too Big";
        }
      default:
        return number;
    }
  };

  let theme = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
  };

  switch (colors % 9) {
    case 0:
      theme = {
        backgroundColor: "white",
        color: "black",
        padding: "10px",
      };
      break;
    case 1:
      theme = {
        backgroundColor: "red",
        color: "LawnGreen",
        padding: "10px",
      };
      break;
    case 2:
      theme = {
        backgroundColor: "orange",
        color: "darkblue",
        padding: "10px",
      };
      break;
    case 3:
      theme = {
        backgroundColor: "yellow",
        color: "magenta",
        padding: "10px",
      };
      break;
    case 4:
      theme = {
        backgroundColor: "LawnGreen",
        color: "red",
        padding: "10px",
      };
      break;
    case 5:
      theme = {
        backgroundColor: "darkblue",
        color: "orange",
        padding: "10px",
      };
      break;
    case 6:
      theme = {
        backgroundColor: "magenta",
        color: "yellow",
        padding: "10px",
      };
      break;
    case 7:
      theme = {
        backgroundColor: "black",
        color: "white",
        padding: "10px",
      };
      break;
    case 8:
      theme = {
        backgroundColor: "black",
        color: "LawnGreen",
        padding: "10px",
      };
      break;
    default:
      break;
  }

  return (
    <section id="numberfacts">
      <div style={theme}>
        <section>
          <h3>
            Square Root: <p className="numberresult">{getNumbers("sqrt")}</p>
          </h3>
          <h2>
            Number:{" "}
            <p className="numberresult" id="targetnum">
              {getNumbers("num")}
            </p>
          </h2>
          <h3>
            Square: <p className="numberresult">{getNumbers("square")}</p>
          </h3>
          <h3>
            Square / Square Root:{" "}
            <p className="numberresult">{getNumbers("sr/sqrt")}</p>
          </h3>
          <h3>
            Number / Square Root:{" "}
            <p className="numberresult">{getNumbers("num/sqrt")}</p>
          </h3>
          <h3>
            Factors: <p className="numberresult">{getNumbers("factors")}</p>
          </h3>
          <h3>
            Factorial:{" "}
            <p className="numberresult">{getNumbers("factorials")}</p>
          </h3>
        </section>
        <section>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
          />
          <button onClick={() => setColors((prev) => prev + 1)}>
            Change Theme
          </button>
          <button
            onClick={
              colors > 0
                ? () => setColors((prev) => prev - 1)
                : () => setColors(8)
            }
          >
            Change Back
          </button>
        </section>
      </div>
    </section>
  );
};

export default NumberData;
