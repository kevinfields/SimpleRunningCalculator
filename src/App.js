import CalculatorSimple from "./pages/CalculatorSimple";
import Home from "./pages/Home";
import FunctionCalculator from "./pages/FunctionCalculator";
import RandomStrings from "./pages/RandomStrings";
import NumberData from "./pages/NumberData";
import { Route, Routes } from "react-router-dom";
import Links from "./components/Links";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/runningcalculator" element={<CalculatorSimple />} />
        <Route path="/functioncalculator" element={<FunctionCalculator />} />
        <Route path="/numberdata" element={<NumberData />} />
        <Route path="/randomstrings" element={<RandomStrings />} />
      </Routes>
      <br />
      <Links />
    </section>
  );
}

export default App;
