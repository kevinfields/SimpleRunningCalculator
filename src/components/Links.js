import { Link } from "react-router-dom";

const Links = () => {
  return (
    <section className="linkcontainer">
      <nav>
        <p className="linkitem">
          <Link to="/">Home</Link>
        </p>
        <p className="linkitem">
          <Link to="/runningcalculator">Running Calculator</Link>
        </p>
        <p className="linkitem">
          <Link to="/basiccalculator">Basic Calculator</Link>
        </p>
        <p className="linkitem">
          <Link to="/numberdata">Number Data</Link>
        </p>
        <p className="linkitem">
          <Link to="/randomstrings">Random String Generator</Link>
        </p>
        <p className="linkitem">
          <Link to="/timedgame">Timed Button Game</Link>
        </p>
      </nav>
    </section>
  );
};

export default Links;
