import useLocalStorage from "../hooks/useLocalStorage";

const Home = () => {
  const [username, setUsername] = useLocalStorage("username", "");

  return (
    <section>
      <div id="hometitle">Calculators</div>
      <br />
      <section id="useLocalStorageTester">
        <p>{username}</p>
        <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </section>
    </section>
  );
};

export default Home;
