import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import getConsonant from "../functions/getConsonant";
import getVowel from "../functions/getVowel";

const GenerateRandomString = () => {
  const [structure, setStructure] = useLocalStorage("cvcv", "");
  const [length, setLength] = useState(structure.length);
  const [randomArray, setRandomArray] = useState([]);
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let structureArray = structure.split("");
    if (structureArray.length > length) {
      setStructure(structure.substring(0, length));
    }

    setStructure(structureArray.join(""));
    setRandomString(randomArray.toString());
  }, [structure, length, randomString, randomArray, setStructure]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (structure.length > length) {
      setStructure((prevStructure) => prevStructure.substring(0, length));
    }
    setRandomArray([]);
    let structureArray = structure.split("");
    if (structureArray.length < length) {
      for (let i = structureArray.length; i < length; i++) {
        if (structureArray[i - 1] === "c") {
          structureArray[i] = "v";
        } else {
          structureArray[i] = "c";
        }
      }
      setStructure(structureArray.join(""));
    }
    for (let i = 0; i < length; i++) {
      switch (structureArray[i]) {
        case "c":
          setRandomArray(
            (prevArray) =>
              prevArray + getConsonant(prevArray[i - 1], structureArray[i + 1])
          );

          break;
        case "v":
          setRandomArray(
            (prevArray) =>
              prevArray + getVowel(prevArray[i - 1], structureArray[i + 1])
          );
          break;
        case " ":
          setRandomArray((prevArray) => prevArray + " ");
          break;
        default:
          setRandomArray((prevArray) => prevArray + "#");
          break;
      }
      setRandomString(randomArray.toString());
    }
  };

  return (
    <div className="generatestring">
      <form onSubmit={onSubmit}>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <input
          type="text"
          value={structure}
          onChange={(e) => setStructure(e.target.value)}
          maxLength={length}
        />
        <button>Submit</button>
      </form>
      <p>{randomString}</p>
    </div>
  );
};

export default GenerateRandomString;
