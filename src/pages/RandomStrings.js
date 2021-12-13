import GenerateRandomString from "../components/GenerateRandomString";
import RandomStringPicker from "../components/RandomStringPicker";
import stringStructuralDivision from "../functions/stringStructuralDivision";
import getVowel from "../functions/getVowel";
import { useState, useEffect } from "react";
import getConsonant from "../functions/getConsonant";

const RandomStrings = () => {
  const [outline, setOutline] = useState(stringStructuralDivision("cccvvccvv"));
  const [word, setWord] = useState("");

  useEffect(() => {
    let catchingArray = [];
    for (let i = 0; i < outline.length; i++) {
      if (outline[i - 1] && outline[i + 1]) {
        switch (outline[i]) {
          case "c":
            if (outline[i + 1] === "vv") {
              catchingArray[i] = getConsonant(true, 1);
            } else {
              catchingArray[i] = getConsonant(false, 1);
            }
            break;
          case "v":
            if (outline[i - 1] && outline[i - 1].includes("q")) {
              catchingArray[i] = getVowel(true, 1);
            } else {
              catchingArray[i] = getVowel(false, 1);
            }
            break;
          case "cc":
            if (outline[i + 1] === "vv") {
              catchingArray[i] = getConsonant(true, 2);
            } else {
              catchingArray[i] = getConsonant(false, 2);
            }
            break;
          case "vv":
            if (outline[i - 1] && outline[i - 1].includes("q")) {
              catchingArray[i] = getVowel(true, 2);
            } else {
              catchingArray[i] = getVowel(false, 2);
            }
            break;
          case "ccc":
            if (outline[i + 1] === "vv") {
              catchingArray[i] = getConsonant(true, 3);
            } else {
              catchingArray[i] = getConsonant(false, 3);
            }
            break;
          case "vvv":
            if (outline[i - 1] && outline[i - 1].includes("q")) {
              catchingArray[i] = getVowel(true, 3);
            } else {
              catchingArray[i] = getVowel(false, 3);
            }
            break;
          default:
            catchingArray[i] = "?";
            break;
        }
      } else if (outline[i - 1]) {
        switch (outline[i]) {
          case "c":
            catchingArray[i] = getConsonant(false, 1, "end");
            break;
          case "v":
            catchingArray[i] = getVowel(false, 1, "end");
            break;
          case "cc":
            catchingArray[i] = getConsonant(false, 2, "end");
            break;
          case "vv":
            if (outline[i - 1] && outline[i - 1].includes("q")) {
              catchingArray[i] = getVowel(true, 2, "end");
            } else {
              catchingArray[i] = getVowel(false, 2, "end");
            }
            break;
          case "ccc":
            catchingArray[i] = getConsonant(false, 3, "end");
            break;
          case "vvv":
            if (outline[i - 1] && outline[i - 1].includes("q")) {
              catchingArray[i] = getVowel(true, 3, "end");
            } else {
              catchingArray[i] = getVowel(false, 3, "end");
            }
            break;
          default:
            catchingArray[i] = "?";
            break;
        }
      } else {
        switch (outline[i]) {
          case "c":
            catchingArray[i] = getConsonant(false, 1, "start");
            break;
          case "v":
            catchingArray[i] = getVowel(false, 1, "start");
            break;
          case "cc":
            catchingArray[i] = getConsonant(false, 2, "start");
            break;
          case "vv":
            if (outline[i - 1] && outline[i - 1].includes("q")) {
              catchingArray[i] = getVowel(true, 2, "start");
            } else {
              catchingArray[i] = getVowel(false, 2, "start");
            }
            break;
          case "ccc":
            catchingArray[i] = getConsonant(false, 3, "start");
            break;
          case "vvv":
            if (outline[i - 1] && outline[i - 1].includes("q")) {
              catchingArray[i] = getVowel(true, 3, "start");
            } else {
              catchingArray[i] = getVowel(false, 3, "start");
            }
            break;
          default:
            catchingArray[i] = "?";
            break;
        }
      }
    }
    setWord(catchingArray.join(""));
  }, [outline]);

  return (
    <div>
      <section id="randomstring">
        <GenerateRandomString />
        <RandomStringPicker />
        {outline}
        <input
          type="text"
          onChange={(e) => setOutline(stringStructuralDivision(e.target.value))}
        />
        <p>{word}</p>
      </section>
    </div>
  );
};

export default RandomStrings;
