// Power
const pow = (a, b) => Math.pow(a, b);

console.log(pow(2, 4));

// Area of Hexagon

const areaOfHexagon = (sideLength) =>
  (3 / 2) * Math.sqrt(3) * Math.pow(sideLength, 2);

console.log(areaOfHexagon(10));

// No. of words
const noOfWords = (str) => str.split(" ").length;
console.log(noOfWords("We are neoGrammers"));
console.log(noOfWords("We are"));

//
const findMin = (...args) => Math.min.apply(null, [...args]);
console.log(findMin(3, 5));
console.log(findMin(3, 5, 9, 1));

const typeOfTriangle = (angle1, angle2, angle3) => {
  let sumOfAngles = angle1 + angle2 + angle3;
  if (sumOfAngles != 180) {
    return "Not a Triangle";
  }
  if (angle1 === angle2 && angle2 === angle3) {
    return "Equilateral Triangle";
  }
};

function reverse(num) {
  let len = parseInt(Math.log10(num) + 1);
  let final = 0;
  let rem = num;
  let mul = 0;

  for (let i = len - 1; i >= 0; i--) {
    digit = parseInt(rem / 10 ** i);
    rem = rem % 10 ** i;
    mul = 10 ** (len - i - 1);
    final = final + mul * digit;
    console.log(digit, mul, final);
  }

  return final;
}
console.log(reverse(1234));

export { pow, noOfWords, findMin, areaOfHexagon };
