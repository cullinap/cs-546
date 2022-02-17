const arrayUtils = require("./arrayUtils")
const stringUtils = require("./stringUtils")
const objUtils = require("./objUtils")

try {
    console.log(arrayUtils.mean([1, 2, 3]));
 } catch(e) {
    console.log(e);
 }

try {
    console.log(arrayUtils.mean([]));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.medianSquared([4,1,2]));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.medianSquared(["guitar", 1, 3, "apple"]));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.maxElement([5, 6, 7]));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.maxElement([1,2,"nope"]));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.fill(6));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.fill());
} catch(e) {
    console.log(e);
}



try {
    console.log(arrayUtils.countRepeating([7, '7', 13, true, true, true, "Hello","Hello", "hello"]));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.countRepeating("foobar"));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.isEqual([1, 2, 3], [3, 1, 2]));
} catch(e) {
    console.log(e);
}

try {
    console.log(arrayUtils.isEqual([ 'Z', 'R', 'B', 'C', 'A' ], ['R', 'B', 'C', 'A', 'Z']));
} catch(e) {
    console.log(e);
}

try {
    console.log(stringUtils.camelCase('my function rocks'));
} catch(e) {
    console.log(e);
}

try {
    console.log(stringUtils.camelCase());
} catch(e) {
    console.log(e);
}

try {
    console.log(stringUtils.replaceChar("Daddy"));
} catch(e) {
    console.log(e);
}

try {
    console.log(stringUtils.replaceChar(123));
} catch(e) {
    console.log(e);
}

try {
    console.log(stringUtils.mashUp("Patrick", "Hill"));
} catch(e) {
    console.log(e);
}

try {
    console.log(stringUtils.mashUp("p", "b"));
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
    console.log(objUtils.makeArrays("astring"));
} catch(e) {
    console.log(e);
}


const firstOne = {a: 2, b: 3};
const secondOne = {a: 2, b: 5};
const forthOne = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}
const fifthOne  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}}

try {
    console.log(objUtils.isDeepEqual(forthOne, fifthOne));
} catch(e) {
    console.log(e);
}

try {
    console.log(objUtils.isDeepEqual(firstOne, "bar"));
} catch(e) {
    console.log(e);
}

try {
    console.log(objUtils.computeObject({a: 3, b: 7, c: 5}, n => n * 2));
} catch(e) {
    console.log(e);
}

try {
    console.log(objUtils.computeObject({a: 3, b: 7, c: 5}, "astring"));
} catch(e) {
    console.log(e);
}


