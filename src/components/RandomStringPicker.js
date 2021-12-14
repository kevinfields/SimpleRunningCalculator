import { useState } from "react";
import getSoundFromArray from "../functions/getSoundFromArray";

const xCCArray = [
  "bl",
  "br",
  "ch",
  "cl",
  "cr",
  "dr",
  "fl",
  "fr",
  "gl",
  "gr",
  "kn",
  "ph",
  "pl",
  "pr",
  "sc",
  "sh",
  "sk",
  "sl",
  "sm",
  "sn",
  "sp",
  "st",
  "sw",
  "th",
  "tr",
  "tw",
  "wh",
  "wr",
];
const xVVArray = ["ai", "au", "ea", "eu", "ia", "io"];
const xCArray = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "l",
  "m",
  "n",
  "p",
  "r",
  "s",
  "t",
  "v",
  "w",
  "y",
  "z",
];
const xVArray = ["a", "e", "i", "o", "u"];
const vCCvArray = [
  "bl",
  "br",
  "cc",
  "ch",
  "ck",
  "cl",
  "cr",
  "ct",
  "cs",
  "dd",
  "dg",
  "dr",
  "fl",
  "fr",
  "ff",
  "ft",
  "gh",
  "gl",
  "gr",
  "kn",
  "lb",
  "ld",
  "lf",
  "lk",
  "ll",
  "lm",
  "lp",
  "ls",
  "lt",
  "lv",
  "ln",
  "mb",
  "mp",
  "mm",
  "nd",
  "ng",
  "nk",
  "nn",
  "ph",
  "pl",
  "pp",
  "pr",
  "rb",
  "rc",
  "rd",
  "rf",
  "rg",
  "rk",
  "rl",
  "rm",
  "rn",
  "rp",
  "rq",
  "rr",
  "rs",
  "rt",
  "rv",
  "sc",
  "sh",
  "sk",
  "sl",
  "sm",
  "sn",
  "sp",
  "ss",
  "st",
  "sw",
  "th",
  "tr",
  "tt",
  "wh",
  "wr",
];
const cVVcArray = [
  "ai",
  "au",
  "ea",
  "ee",
  "ei",
  "ia",
  "ie",
  "io",
  "iu",
  "ua",
  "ue",
  "ui",
  "uo",
];
const vCvArray = [
  "b",
  "d",
  "f",
  "g",
  "j",
  "l",
  "m",
  "n",
  "p",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const cVcArray = ["a", "e", "i", "o", "u"];
const CCxArray = [
  "ng",
  "nd",
  "bt",
  "bs",
  "ct",
  "ch",
  "ds",
  "ff",
  "ft",
  "gh",
  "gs",
  "ck",
  "lk",
  "nk",
  "sk",
  "rk",
  "ll",
  "lm",
  "lt",
  "lp",
  "ld",
  "ls",
  "lb",
  "mp",
  "mb",
  "nt",
  "ms",
  "ns",
  "pt",
  "ps",
  "rt",
  "rs",
  "rp",
  "rb",
  "st",
  "sh",
  "ss",
  "sp",
  "ts",
  "th",
  "wl",
  "wd",
  "zz",
];
const VVxArray = ["ue", "ea"];
const CxArray = ["d", "g", "l", "m", "n", "p", "r", "s", "t", "w", "x", "y"];
const VxArray = ["e", "a"];

const RandomStringPicker = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [middle, setMiddle] = useState("");
  const [fourth, setFourth] = useState("");
  const [last, setLast] = useState("");

  const refresh = () => {
    const positionArray = [first, second, middle, fourth, last];

    const fn = (sound, i) => {
      switch (i) {
        case 0:
          setFirst(sound);
          break;
        case 1:
          setSecond(sound);
          break;
        case 2:
          setMiddle(sound);
          break;
        case 3:
          setFourth(sound);
          break;
        case 4:
          setLast(sound);
          break;
        default:
          setFirst(sound);
          break;
      }
    };

    for (let i = 0; i < positionArray.length; i++) {
      if (i === 0) {
        let startArrays = [xCCArray, xCArray, xVVArray, xVArray];
        for (let j = 0; j < startArrays.length; j++) {
          if (startArrays[j].includes(positionArray[i])) {
            fn(getSoundFromArray(startArrays[j].join("")), i);
          }
        }
      } else if (i < 4) {
        let middleArrays = [vCCvArray, cVVcArray, cVcArray, vCvArray];
        for (let j = 0; j < middleArrays.length; j++) {
          if (middleArrays[j].includes(positionArray[i])) {
            fn(getSoundFromArray(middleArrays[j].join("")), i);
          }
        }
      } else {
        let endArrays = [CCxArray, CxArray, VVxArray, VxArray];
        for (let j = 0; j < endArrays.length; j++) {
          if (endArrays[j].includes(positionArray[i])) {
            fn(getSoundFromArray(endArrays[j].join("")), i);
          }
        }
      }
    }
  };

  return (
    <div>
      <select
        id="soundinputfirst"
        onChange={(e) => setFirst(getSoundFromArray(e.target.value))}
      >
        <option value={xCArray.join("")}>C</option>
        <option value={xVArray.join("")}>V</option>
        <option value={xCCArray.join("")}>CC</option>
        <option value={xVVArray.join("")}>VV</option>
      </select>
      <select
        id="soundinput2"
        onChange={(e) => setSecond(getSoundFromArray(e.target.value))}
      >
        <option value={vCvArray.join("")}>C</option>
        <option value={cVcArray.join("")}>V</option>
        <option value={vCCvArray.join("")}>CC</option>
        <option value={cVVcArray.join("")}>VV</option>
      </select>
      <select
        id="soundinputmiddle"
        onChange={(e) => setMiddle(getSoundFromArray(e.target.value))}
      >
        <option value={vCvArray.join("")}>C</option>
        <option value={cVcArray.join("")}>V</option>
        <option value={vCCvArray.join("")}>CC</option>
        <option value={cVVcArray.join("")}>VV</option>
      </select>
      <select
        id="soundinput4"
        onChange={(e) => setFourth(getSoundFromArray(e.target.value))}
      >
        <option value={vCvArray.join("")}>C</option>
        <option value={cVcArray.join("")}>V</option>
        <option value={vCCvArray.join("")}>CC</option>
        <option value={cVVcArray.join("")}>VV</option>
      </select>
      <select
        id="soundinputlast"
        onChange={(e) => setLast(getSoundFromArray(e.target.value))}
      >
        <option value={CxArray.join("")}>C</option>
        <option value={VxArray.join("")}>V</option>
        <option value={CCxArray.join("")}>CC</option>
        <option value={VVxArray.join("")}>VV</option>
      </select>
      <button onClick={refresh}>Try Again</button>
      <p>
        {first}
        {second}
        {middle}
        {fourth}
        {last}
      </p>
    </div>
  );
};

export default RandomStringPicker;
