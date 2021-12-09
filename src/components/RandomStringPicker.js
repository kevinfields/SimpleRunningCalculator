import { useState } from "react";

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
  "sr",
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
  "q",
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
  "cq",
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
  "nq",
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
  "sq",
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
const CCxArray = ["ng", "nd"];
const VVxArray = ["ue", "ea"];
const CxArray = ["t", "l"];
const VxArray = ["e", "a"];

const RandomStringPicker = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [middle, setMiddle] = useState("");
  const [fourth, setFourth] = useState("");
  const [last, setLast] = useState("");

  //const [lastIndex, setLastIndex] = useState(2);

  const firstSetter = (array) => {
    //This works but there must be hundreds of easier ways

    let soundValue;

    //if the array has two letters per value they are seperated,
    //so choose a random first letter from the options

    if (array === xCCArray.join("") || array === xVVArray.join("")) {
      soundValue = 2 * Math.floor(Math.random() * (array.length / 2));
    } else {
      //if the array has single letter values, just randomly choose one

      soundValue = Math.floor(Math.random() * array.length);
    }

    let sound = array[soundValue];

    //if the sound is split, add it's other half back
    if (array === xCCArray.join("") || array === xVVArray.join("")) {
      sound = sound + array[soundValue + 1];
    }
    setFirst(sound);
  };

  const secondSetter = (array) => {
    let soundValue;
    if (array === vCCvArray.join("") || array === cVVcArray.join("")) {
      soundValue = 2 * Math.floor(Math.random() * (array.length / 2));
    } else {
      soundValue = Math.floor(Math.random() * array.length);
    }
    let sound = array[soundValue];
    if (array === vCCvArray.join("") || array === cVVcArray.join("")) {
      sound = sound + array[soundValue + 1];
    }
    setSecond(sound);
  };

  const middleSetter = (array) => {
    let soundValue;
    if (array === vCCvArray.join("") || array === cVVcArray.join("")) {
      soundValue = 2 * Math.floor(Math.random() * (array.length / 2));
    } else {
      soundValue = Math.floor(Math.random() * array.length);
    }
    let sound = array[soundValue];
    if (array === vCCvArray.join("") || array === cVVcArray.join("")) {
      sound = sound + array[soundValue + 1];
    }
    setMiddle(sound);
  };

  const fourthSetter = (array) => {
    let soundValue;
    if (array === vCCvArray.join("") || array === cVVcArray.join("")) {
      soundValue = 2 * Math.floor(Math.random() * (array.length / 2));
    } else {
      soundValue = Math.floor(Math.random() * array.length);
    }
    let sound = array[soundValue];
    if (array === vCCvArray.join("") || array === cVVcArray.join("")) {
      sound = sound + array[soundValue + 1];
    }
    setFourth(sound);
  };

  const lastSetter = (array) => {
    let soundValue;
    if (array === CCxArray.join("") || array === VVxArray.join("")) {
      soundValue = 2 * Math.floor(Math.random() * (array.length / 2));
    } else {
      soundValue = Math.floor(Math.random() * array.length);
    }
    let sound = array[soundValue];
    if (array === CCxArray.join("") || array === VVxArray.join("")) {
      sound = sound + array[soundValue + 1];
    }
    setLast(sound);
  };

  const refresh = () => {
    if (xCCArray.includes(first)) {
      firstSetter(xCCArray.join(""));
    } else if (xCArray.includes(first)) {
      firstSetter(xCArray.join(""));
    } else if (xVVArray.includes(first)) {
      firstSetter(xVVArray.join(""));
    } else {
      firstSetter(xVArray.join(""));
    }
    if (vCCvArray.includes(second)) {
      secondSetter(vCCvArray.join(""));
    } else if (vCvArray.includes(second)) {
      secondSetter(vCvArray.join(""));
    } else if (cVVcArray.includes(second)) {
      secondSetter(cVVcArray.join(""));
    } else {
      secondSetter(cVcArray.join(""));
    }
    if (vCCvArray.includes(middle)) {
      middleSetter(vCCvArray.join(""));
    } else if (vCvArray.includes(middle)) {
      middleSetter(vCvArray.join(""));
    } else if (cVVcArray.includes(middle)) {
      middleSetter(cVVcArray.join(""));
    } else {
      middleSetter(cVcArray.join(""));
    }
    if (vCCvArray.includes(fourth)) {
      fourthSetter(vCCvArray.join(""));
    } else if (vCvArray.includes(fourth)) {
      fourthSetter(vCvArray.join(""));
    } else if (cVVcArray.includes(fourth)) {
      fourthSetter(cVVcArray.join(""));
    } else {
      fourthSetter(cVcArray.join(""));
    }
    if (CCxArray.includes(last)) {
      lastSetter(CCxArray.join(""));
    } else if (CxArray.includes(last)) {
      lastSetter(CxArray.join(""));
    } else if (VVxArray.includes(last)) {
      lastSetter(VVxArray.join(""));
    } else {
      lastSetter(VxArray.join(""));
    }
  };

  return (
    <div>
      <select
        id="soundinputfirst"
        onChange={(e) => firstSetter(e.target.value)}
      >
        <option value={xCArray.join("")}>C</option>
        <option value={xVArray.join("")}>V</option>
        <option value={xCCArray.join("")}>CC</option>
        <option value={xVVArray.join("")}>VV</option>
      </select>
      <select id="soundinput2" onChange={(e) => secondSetter(e.target.value)}>
        <option value={vCvArray.join("")}>C</option>
        <option value={cVcArray.join("")}>V</option>
        <option value={vCCvArray.join("")}>CC</option>
        <option value={cVVcArray.join("")}>VV</option>
      </select>
      <select
        id="soundinputmiddle"
        onChange={(e) => middleSetter(e.target.value)}
      >
        <option value={vCvArray.join("")}>C</option>
        <option value={cVcArray.join("")}>V</option>
        <option value={vCCvArray.join("")}>CC</option>
        <option value={cVVcArray.join("")}>VV</option>
      </select>
      <select id="soundinput4" onChange={(e) => fourthSetter(e.target.value)}>
        <option value={vCvArray.join("")}>C</option>
        <option value={cVcArray.join("")}>V</option>
        <option value={vCCvArray.join("")}>CC</option>
        <option value={cVVcArray.join("")}>VV</option>
      </select>
      <select id="soundinputlast" onChange={(e) => lastSetter(e.target.value)}>
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
