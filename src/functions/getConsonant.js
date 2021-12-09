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

function customArraySelector(letters, subtract) {
  //takes array 'letters' and boolean 'subtract'. If subtract is true,
  //creates an array of all consonants minus those included in 'letters'.
  //If subtract is false, it simply keeps the original 'letters' parameter.
  if (subtract) {
    let newArray = [];
    let removed = letters;
    for (let i = 0; i < consonantArray.length; i++) {
      if (!removed.includes(consonantArray[i])) {
        newArray = newArray + consonantArray[i];
      }
    }
    //returns a random item from the array it has made
    return newArray[Math.floor(Math.random() * newArray.length)];
  }
  return letters[Math.floor(Math.random() * letters.length)];
}

export default function getConsonant(prev, next) {
  //decides array of letters to choose from based on the letter before it and
  //whether the next letter will be a consonant or vowel.
  switch (prev) {
    case "a":
      if (next === "v") {
        return customArraySelector([""], true);
      } else {
        return customArraySelector(["j", "q", "x", "z"], true);
      }
    default:
      return customArraySelector(["q", "x"], true);
  }
}
