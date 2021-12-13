let vowelArray = ["a", "e", "i", "o", "u", "y"];
let doubleVowelArray = [
  "ai",
  "au",
  "ea",
  "ee",
  "ia",
  "ie",
  "io",
  "oa",
  "oo",
  "ou",
  "ua",
  "ue",
  "ui",
];
let qArray = ["ua", "ue", "ui"];

export default function getVowel(prev, length) {
  if (prev !== true) {
    switch (length) {
      case 1:
        return vowelArray[Math.floor(Math.random() * vowelArray.length)];
      case 2:
        return doubleVowelArray[
          Math.floor(Math.random() * doubleVowelArray.length)
        ];
      case 3:
        return "eau";
      default:
        return "?";
    }
  } else {
    if (length === 2) {
      return qArray[Math.floor(Math.random() * qArray.length)];
    } else {
      return "?";
    }
  }
}
