const questionOne = function questionOne(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (!arr.length) {
    return 0;
  } else {
    const sumOfSquares = arr
      .map((n) => n * n)
      .reduce((sumValue, arrayValue) => {
        return sumValue + arrayValue;
      }, 0);
    return sumOfSquares;
  }
};

const questionTwo = function questionTwo(num){
  if (num <= 0) {
    return 0;
  } else if (num == 1) {
    return num;
  } else {
    return questionTwo(num - 1) + questionTwo(num - 2);
  }
};

const questionThree = function questionThree(text) {
  let vowels = ["a", "e", "i", "o", "u"];
  let letters = text.toLowerCase().split("");
  let numVowels = 0;

  for (let i = 0; i < letters.length; ++i) {
    if (vowels.includes(letters[i])) {
      numVowels += 1;
    }
  }

  return numVowels;
};

const questionFour = function questionFour(num) {
  if (num < 0) {
    return NaN;
  } else if (num === 0) {
    return 1
  } else {
    return num * questionFour(num - 1)
  }
};

module.exports = {
  firstName: "Patrick",
  lastName: "Cullinane",
  studentId: "10473527",
  questionOne,
  questionTwo,
  questionThree,
  questionFour
};

/* references:
q1: https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
q1: https://www.youtube.com/watch?v=g1C40tDP0Bk 
q1: https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/ 
q1: https://stackoverflow.com/questions/24403732/how-to-check-if-array-is-empty-or-does-not-exist
q2: https://www.geeksforgeeks.org/python-program-for-program-for-fibonacci-numbers-2/ 
q3: https://www.w3schools.com/jsref/jsref_includes_array.asp 
q4: https://stackoverflow.com/questions/12149945/javascript-function-returning-nan 
q4: https://javascriptrefined.io/nan-and-typeof-36cd6e2a4e43 
*/
