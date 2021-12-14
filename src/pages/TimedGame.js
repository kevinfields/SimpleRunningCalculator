import { useState, useEffect } from "react";

const TimedGame = () => {
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [difficulty, setDifficulty] = useState(500);
  const [running, setRunning] = useState(false);

  function addScore(num) {
    setScore((score) => score + num);
  }

  const newDifficulty = (count) => {
    setDifficulty(count);
    setTotalClicks(0);
    setScore(0);
  };
  useEffect(() => {
    if (totalClicks >= 50) {
      alert("Total Score: " + score);
      setTotalClicks(0);
      setScore(0);
      setPoints(0);
      setRunning(false);
    } else if (running) {
      setTimeout(() => {
        if (points > 0) {
          setPoints(-1);
        } else {
          setPoints(1);
          setTotalClicks((totalClicks) => totalClicks + 1);
        }
      }, difficulty);
    }
  }, [points, running, difficulty, score, totalClicks]);

  return (
    <div>
      {running ? (
        <button onClick={() => addScore(points)}>{points}</button>
      ) : null}
      <p>
        Score: {score} / {totalClicks}
      </p>
      <select
        name="difficulty"
        id="difficulty"
        onChange={(e) => newDifficulty(e.target.value)}
      >
        <option value={500}>Easy</option>
        <option value={300}>Medium</option>
        <option value={200}>Hard</option>
        <option value={100}>Expert</option>
      </select>
      <button onClick={() => setRunning(!running)}>
        {running ? "pause" : "play"}
      </button>
    </div>
  );
};

export default TimedGame;
