let vowelArray = ["a", "e", "i", "o", "u", "y"];

const consonantArray = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
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

function customArraySelector(letters) {
  return letters[Math.floor(Math.random() * letters.length)];
}

export default function getVowel(prev, next) {
  if (consonantArray.includes(prev) && prev !== "y") {
    return vowelArray[Math.floor(Math.random() * vowelArray.length)];
  } else {
    switch (prev) {
      case "a":
        return customArraySelector(["i", "u"]);
      case "e":
        return customArraySelector(["a", "e", "o"]);
      case "i":
        return customArraySelector(["a", "o"]);
      case "o":
        return customArraySelector(["a", "i", "o", "u"]);
      case "u":
        return customArraySelector(["a", "e", "i", "o"]);
      case "y":
        if (next !== "v") {
          return customArraySelector(["a", "e", "o"]);
        } else {
          return "e";
        }
      default:
        return "e";
    }
  }
}
