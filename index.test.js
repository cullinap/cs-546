const arrayUtils = require("./arrayUtils")
const stringUtils = require("./stringUtils")
const objUtils = require("./objUtils")

try {
    console.log(arrayUtils.mean([]));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.mean());
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.mean("banana"));
} catch(e) {
    console.log(e);
}



try {
    console.log(arrayUtils.mean(["guitar", 1, 3, "apple"]));
} catch(e) {
    console.log(e);
}

try {
   console.log(arrayUtils.mean([1, 2, 3]));
} catch(e) {
   console.log(e);
}

try {
    console.log(arrayUtils.medianSquared([4,3,2,1]));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.medianSquared([30,20,10]));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.medianSquared([]));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.medianSquared("banana"));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.medianSquared(1,2,3));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.medianSquared(["guitar", 1, 3, "apple"]));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.medianSquared());
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.fill(6));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.fill(3, 'Welcome'));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.isEqual([ 'Z', 'R', 'B', 'C', 'A' ], ['R', 'B', 'C', 'A', 'Z']));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.isEqual([1, 2, 3], [3, 1, 2]));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.isEqual([1, 2], [1, 2, 3]));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.isEqual([[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]], [[ 3, 1, 2 ], [ 5, 4, 6 ], [ 9, 7, 8 ]]));
} catch(e) {
    console.log(e);
}

try {
    console.log(stringUtils.camelCase('my function rocks'));
} catch(e) {
    console.log(e);
}

try {
    console.log(stringUtils.replaceChar("Daddy"));
} catch(e) {
    console.log(e);
}

try {
    console.log(stringUtils.replaceChar("babbbbble"));
} catch(e) {
    console.log(e);
}

try {
    console.log(stringUtils.replaceChar("Hello, How are you? I hope you are well"));
} catch(e) {
    console.log(e);
}

try {
    console.log(stringUtils.mashUp("Patrick", "Hill"));
} catch(e) {
    console.log(e);
}

const first = { x: 2, y: 3};
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };

try {
    console.log(objUtils.makeArrays([first, second, third]));
} catch(e) {
    console.log(e);
}

try {
    console.log(objUtils.makeArrays([third, first, second]));
} catch(e) {
    console.log(e);
}

const firstOne = {a: 2, b: 3};
const secondOne = {a: 2, b: 5};
const thirdOne = {a: 2, b: 3};
const forthOne = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}
const fifthOne  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}}

try {
    console.log(objUtils.isDeepEqual(firstOne, secondOne));
} catch(e) {
    console.log(e);
}

try {
    console.log(objUtils.isDeepEqual(firstOne, thirdOne));
} catch(e) {
    console.log(e);
}

try {
    console.log(objUtils.isDeepEqual(forthOne, fifthOne));
} catch(e) {
    console.log(e);
}

try {
    console.log(objUtils.computeObject({a: 3, b: 7, c: 5}, n => n * 2));
} catch(e) {
    console.log(e);
}

try {
    console.log(objUtils.computeObject({a: 'b', b: 7, c: 5}, n => n * 2));
} catch(e) {
    console.log(e);
}

try {
    console.log(objUtils.computeObject({a: 3, b: 7, c: 5}, "astring"));
} catch(e) {
    console.log(e);
}

try {
    console.log(objUtils.isDeepEqual([1,2,3], [1,2,3]));
} catch(e) {
    console.log(e);
}

try {
    console.log(objUtils.makeArrays([ "astring", "another"]));
} catch(e) {
    console.log(e);
}

try {
    console.log(objUtils.makeArrays([{},{}]));
} catch(e) {
    console.log(e);
}

try {
    console.log(stringUtils.mashUp(12));
} catch(e) {
    console.log(e);
}

try {
    console.log(stringUtils.replaceChar("Hello, How are you? I hope you are well"));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.isEqual([1, 2], [1, 2, 3]));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.fill(3, 'Welcome'));
} catch(e) {
    console.log(e);
}