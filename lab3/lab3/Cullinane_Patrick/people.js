const axios = require("axios");
const peopleJSON =
  "https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json";

function stringChecks(string) {
  const message = `${string || "provided input"} must be a string`
  if(typeof string === 'undefined' || string === null) throw message
  if(typeof string !== 'string') throw message
  if(string.length === 0) throw message
}

function numberChecks(val) {
  if(typeof val === 'undefined' || val === null) throw `val must be a number`
  if(typeof val !== 'number') throw `val must be a number`
}

async function getApiData(url) {
  let { data } = await axios.get(url);
  return data;
}

async function getPersonById(id) {
  if(!id) throw `you must provide a id`;
  if (typeof id !== 'string') throw 'id must be a string';
  if (id.trim().length === 0)
    throw 'id cannot be an empty string or just spaces';
  //if (typeof id !== "string") throw `${id || "provide input"} must be a string`;

  let apiData = await getApiData(peopleJSON);
  let newArr = [];

  for (const [key, value] of Object.entries(apiData)) {
    if (value["id"] === id) newArr.push(value);
  }

  if (newArr.length === 0) throw `person not found`;
  return newArr[0];
}

async function sameEmail(emailDomain) {
  if(!emailDomain) throw `you must provide a email`;
  if (typeof emailDomain !== 'string') throw 'stockname must be a string';
  if (emailDomain.trim().length === 0)
    throw 'stockname cannot be an empty string or just spaces';

  const message = `${emailDomain || "provided input"} not proper email`
  if(emailDomain.includes(".") === false) throw message
  if(emailDomain.substr(emailDomain.lastIndexOf(".") + 1).length < 2) throw message
  if(isNaN(emailDomain.slice(emailDomain.lastIndexOf('.') + 1)) === false) throw message

  let apiData = await getApiData(peopleJSON);
  let emailArr = [];

  for (const [key, value] of Object.entries(apiData)) {
    let emailVal = value["email"].split("@")[1]
    if (emailVal === emailDomain.toLowerCase())
      emailArr.push(value);
  }

  if (emailArr.length === 1) throw `email provided only had one result`;
  return emailArr;
}

async function manipulateIp() {
  // check for input 

  let apiData = await getApiData(peopleJSON);
  let ipArr = [];
  let sortedArrJoined = []
  let calcAvgResults = []

  for (const [key, value] of Object.entries(apiData)) {
    let sortArr = []
    
    // remove period from ip, join ip
    let ipValue = value["ip_address"].split('.').join("");
    let getId = value["id"];
    for(let i=0; i<ipValue.length; ++i) {
      sortArr.push(ipValue[i])
    }

    let combineResults = +sortArr.sort().join("")
    sortedArrJoined.push({getId, combineResults})  
    calcAvgResults.push(combineResults) 
  }

  sortedArrJoined.sort(function (a,b) {
    return a.combineResults - b.combineResults
  });

  let max = Math.max.apply(Math, sortedArrJoined.map(function(o) { return o.combineResults; }))
  let min = Math.min.apply(Math, sortedArrJoined.map(function(o) { return o.combineResults; }))
  const average = (array) => array.reduce((a, b) => a + b) / array.length;

  //let avg = sortedArrJoined.reduce((total, next) => total + next.combineResults, 0) / combineResults.length;

  let maxId = sortedArrJoined.find(o => o.combineResults === max)['getId']
  let minId = sortedArrJoined.find(o => o.combineResults === min)['getId']
  
  let maxJson = await getPersonById(maxId)
  let minJson = await getPersonById(minId)

  let objResult = {}
  let maxName = {}
  let minName = {}
  let averageResult = {}

  maxName["firstName"] = maxJson["first_name"]
  maxName["lastName"] = maxJson["last_name"]
  minName["firstName"] = minJson["first_name"]
  minName["lastName"] = minJson["last_name"]

  objResult["highest"] = maxName
  objResult["lowest"] = minName
  objResult["average"] = Math.floor(average(calcAvgResults))
  
  return objResult
}

async function sameBirthday(month, day) {
  let thirtyDayMonths = [4,6,9,11]
  if(typeof month === 'string')
    month = parseInt(month)
  if(typeof day === 'string')
    day = parseInt(day)

  if(typeof month !== 'number' || isNaN(month)) throw "value must be number"
  if(typeof day !== 'number' || isNaN(day)) throw "value must be number"

  if(month < 1 || month > 12 || day < 1) throw `month must be between 1 and 12, days must be greater than 0`
  if(month === 2 & day > 28) throw `februrary has only 28 days`
  if(thirtyDayMonths.includes(month) & day > 30) throw `this month only has 30 days`
  if(day > 32) throw `month can have a maximum of 31 days`
  

  let apiData = await getApiData(peopleJSON);
  let newArr = [];

  for (const [key, value] of Object.entries(apiData)) {
    let person_data = {}
    person_data['id'] = value["id"]
    person_data['month'] = parseInt(value["date_of_birth"].split("/")[0])
    person_data['day'] = parseInt(value["date_of_birth"].split("/")[1])
    newArr.push(person_data)
  }

  let matchingArr = []
  for(let i=0; i<newArr.length; ++i) {
    if(newArr[i].month === month & newArr[i].day === day) {
      let personObj = await getPersonById(newArr[i]["id"])
      matchingArr.push(
        personObj["first_name"] + " " + personObj["last_name"]
      )
    }
  }

  return matchingArr
  
}


module.exports = {
  getPersonById,
  sameEmail,
  manipulateIp,
  sameBirthday
};


/*
references:
https://stackoverflow.com/questions/573145/get-everything-after-the-dash-in-a-string-in-javascript/35236900
https://stackoverflow.com/questions/4020796/finding-the-max-value-of-an-attribute-in-an-array-of-objects
https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript

*/
