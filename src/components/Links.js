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
          <Link to="/functioncalculator">Function Calculator</Link>
        </p>
        <p className="linkitem">
          <Link to="/randomstrings">Random String Generator</Link>
        </p>
      </nav>
    </section>
  );
};

export default Links;
