function arrayChecks(arr) {
  if (!Array.isArray(arr)) throw `${arr || "provided input"} is not an array`;
  if (typeof arr === "undefined") throw "Array is not defied";
  if (!arr.length) throw `Array is empty`;
  for (let i = 0; i < arr.length; ++i) {
    if (typeof arr[i] != "number")
      throw `value: ${arr[i]} in array value must be number`;
  }
}

module.exports = {
  description: "This is the first module",
  mean: (arr) => {
    arrayChecks(arr);
    const total = arr.reduce((a, b) => a + b, 0);
    return total / arr.length;
  },

  medianSquared: (arr) => {
    arrayChecks(arr);
    let arrSort = arr.sort();
    let mid = Math.floor(arrSort.length / 2);
    if (arr.length % 2) return Math.pow(arr[mid], 2);
    return Math.pow((arr[mid - 1] + arr[mid]) / 2.0, 2);
  },

  maxElement: (arr) => {
      arrayChecks(arr);
      let obj = {}
      let maxVal = Math.max.apply(Math, arr);
      obj[maxVal] = arr.indexOf(maxVal);
      return obj
  },

  fill: (end, value=0) => {
    if(typeof end === 'undefined' || end === null) throw `${end || "provided input"} is undefined or null`
    if(end <= 0) throw `${end || "provided input"} must be a postive value`
    let arrEnd = Array(end)
    if(value === 0)
      return arrEnd.fill(end).map((d,i) => i + value)
    return arrEnd.fill(value);
  },

  countRepeating: (arr) => {
    if (!Array.isArray(arr)) throw `${arr || "provided input"} is not an array`;
    if (typeof arr === "undefined") throw "Array is not defied";
    const values = {};
    arr.forEach((i) => {values[i] = (values[i] || 0) + 1;});
    
    const finalVals = {}
    for (const [key, value] of Object.entries(values)){
      if(value > 1)
        finalVals[key] = value;
    }

    return finalVals
  },

  isEqual: (arrayOne, arrayTwo) => {
    arrayChecks(arrayOne)
    arrayChecks(arrayTwo)
    // handle case for array of arrays
    if(arrayOne === arrayTwo) return true
    if(arrayOne.length != arrayTwo.length) return false

    let arrOneSort = arrayOne.sort()
    let arrTwoSort = arrayTwo.sort()

    for (let i=0; i<arrOneSort.length; ++i) {
      if(arrOneSort[i] != arrTwoSort[i]) return false
    }
    return true
  }


};



/*
https://stackoverflow.com/questions/29544371/finding-the-average-of-an-array-using-js/29544442
https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/ 
https://www.geeksforgeeks.org/find-median-of-list-in-python/ 
https://stackoverflow.com/questions/45309447/calculating-median-javascript
https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript

*/
