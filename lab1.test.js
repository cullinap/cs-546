const lab1 = require("./lab1");

function checkValues(value, expected) {
  if (value === expected) {
    console.log("pass");
  } else {
    console.log("fail");
  }
}

function checkQuestionOne() {
  let testArr = [
    [1, 2, 3],
    [5, 3, 10],
    [2, 1, 2],
    [5, 10, 9],
    [2, 2, 2, 2],
    [0, -1],
    [],
  ];

  let testVals = [14, 134, 9, 206, 16, 1, 0];

  for (let i = 0; i <= testArr.length; ++i) {
    test = lab1.questionOne(testArr[i]);
    checkValues(test, testVals[i]);
    // console.log(test, testVals[i]);
  }
}

function checkQuestionTwo() {
  let seqInput = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let seqOutput = [0, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

  for(let i=0; i < seqInput.length; ++i) {
    checkValues(lab1.questionTwo(seqInput[i]), seqOutput[i])
  }

}

function checkQuestionThree() {
  let txtInputs = [
    'Alabama',
    'mississippi',
    'Eunoia',
    'adoulie',
    'crwth',
    'SHHH',
    '$t@ff'
  ];
  let vowCnt = [4,4,5,5,0,0,0];

  for(let i=0; i < txtInputs.length; ++i) {
    checkValues(lab1.questionThree(txtInputs[i]), vowCnt[i])
  }

}

function checkQuestionFour() {
  let seqInput = [0,1,2,3,4,5];
  let seqOutput = [1, 1, 2, 6, 24, 120];

  for(let i=0; i < seqInput.length; ++i) {
    checkValues(lab1.questionFour(seqInput[i]), seqOutput[i])
  }
  
  let checkNaN = lab1.questionFour(-1);
  console.log(isNaN(checkNaN))
}


console.log('check question 1:')
checkQuestionOne();
console.log('\ncheck question 2:')
checkQuestionTwo();
console.log('\ncheck question 3:')
checkQuestionThree();
console.log('\ncheck question 4:')
checkQuestionFour();

