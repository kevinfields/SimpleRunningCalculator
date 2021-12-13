export default function getFactors(num) {
  let numberArray = [];

  for (let i = 0; i <= num / 2; i++) {
    if (num % i === 0 && i !== 1) {
      numberArray.push(i);
      numberArray.push(", ");
    }
  }

  if (numberArray.length > 1) {
    numberArray.pop();
  }
  if (num === 1) {
    numberArray.push("1");
  }
  console.log("numberArray: " + numberArray);
  if (numberArray.length === 0) {
    return "Prime";
  }
  return numberArray;
}
