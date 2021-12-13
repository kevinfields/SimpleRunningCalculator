export default function stringStructuralDivision(stringData) {
  //take string parameter, convert to array
  let stringArray = stringData.split("");
  let brokenArray = [];

  //compare each value in array to value following it, adding a # between them
  //if they are different

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === stringArray[i + 1]) {
      brokenArray += stringArray[i];
    } else {
      brokenArray += stringArray[i] + "#";
    }
  }

  let fixedArray = [];

  //look through brokenArray and create a subarray for all
  //segments between two #s

  for (let j = 0, i = 0; i < brokenArray.length; i++) {
    if (brokenArray[i] === "#") {
      // create new array item
      j++;
    } else {
      // add letter to current array item or start current array item
      if (fixedArray[j]) {
        fixedArray[j] = fixedArray[j] + brokenArray[i];
      } else {
        fixedArray[j] = brokenArray[i];
      }
    }
  }
  console.log("fixedArray: " + fixedArray);
  return fixedArray;
}
