import GenerateRandomString from "../components/GenerateRandomString";
import RandomStringPicker from "../components/RandomStringPicker";

const RandomStrings = () => {
  return (
    <div>
      <section id="randomstring">
        <GenerateRandomString />
        <RandomStringPicker />
      </section>
    </div>
  );
};

export default RandomStrings;
