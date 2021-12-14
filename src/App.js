import CalculatorSimple from "./pages/CalculatorSimple";
import Home from "./pages/Home";
import BasicCalculator from "./pages/BasicCalculator";
import RandomStrings from "./pages/RandomStrings";
import NumberData from "./pages/NumberData";
import TimedGame from "./pages/TimedGame";
import { Route, Routes } from "react-router-dom";
import Links from "./components/Links";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/runningcalculator" element={<CalculatorSimple />} />
        <Route path="/basiccalculator" element={<BasicCalculator />} />
        <Route path="/numberdata" element={<NumberData />} />
        <Route path="/randomstrings" element={<RandomStrings />} />
        <Route path="/timedgame" element={<TimedGame />} />
      </Routes>
      <br />
      <Links />
    </section>
  );
}

export default App;
