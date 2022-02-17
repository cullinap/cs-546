const axios = require("axios");

const peopleJSON =
  "https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json";

const stockJson =
  "https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json";

async function getApiData(url) {
    let { data } = await axios.get(url);
    return data;
}

async function listShareholders(stockName) {
    if(!stockName) throw `you must provide a stockname`;
    if (typeof stockName !== 'string') throw 'stockname must be a string';
    if (stockName.trim().length === 0)
      throw 'stockname cannot be an empty string or just spaces';

    let apiData = await getApiData(stockJson);
    let newArr = [];

    for (const [key, value] of Object.entries(apiData)) {
        if(value["stock_name"] == stockName) newArr.push(value);
    }

    if(newArr.length === 0)
        throw `stock does not exist`
    return newArr[0]
}

async function totalShares(stockName) {
    if(!stockName) throw `you must provide a stockname`;
    if (typeof stockName !== 'string') throw 'stockname must be a string';
    if (stockName.trim().length === 0)
      throw 'stockname cannot be an empty string or just spaces';

    const stockData = await listShareholders(stockName)
    const shareHolder = stockData["shareholders"]
    const numShares = shareHolder.reduce((currentTotal, i) => currentTotal + i.number_of_shares, 0)
    
    let count = 0
    for (const [key, value] of Object.entries(shareHolder)) {
        count += 1
    }
    
    if(count === 0) {
        return `${stockName} currently has no shareholders.`
    } else if(count === 1) {
        return `${stockName}, has ${count} shareholder that owns a total of ${numShares} shares.`
    } else {
        return `${stockName}, has ${count} shareholders that own a total of ${numShares} shares.`
    }
        
}

async function listStocks(firstName, lastName){
  if(!firstName || !lastName) throw `you must provide a first and last name`;
  if (typeof firstName !== 'string' || typeof lastName !== 'string') throw 'name must be a string';
  if (firstName.trim().length === 0 || lastName.trim().length === 0)
      throw 'name cannot be an empty string or just spaces';

  const peopleApi = await getApiData(peopleJSON);
  const stockApi = await getApiData(stockJson);
  let newArr = [];
  let shareHolderData = []

  for (const [key, value] of Object.entries(peopleApi)) {
    if (value["first_name"] === firstName & value["last_name"] === lastName) 
        newArr.push(value["id"]);
  }

  for (const [key, value] of Object.entries(stockApi)) {
    for(const [k, v] of Object.entries(value["shareholders"])) {
        let subObj = {}
        if(v['userId'] === newArr[0]) {
            subObj["stock_name"] = value["stock_name"]
            subObj["number_of_shares"] = v["number_of_shares"]
            shareHolderData.push(subObj)
        }
    }
  }

  if(shareHolderData.length === 0) throw `user does not exist in data`
  return shareHolderData;
}

async function getStockById(id) {
    if(!id) throw `you must provide an id`;
    if (typeof id !== 'string') throw 'Id must be a string';
    if (id.trim().length === 0)
      throw 'Id cannot be an empty string or just spaces';

    let apiData = await getApiData(stockJson);
    let newArr = [];

    for (const [key, value] of Object.entries(apiData)) {
        if(value["id"] == id) newArr.push(value);
    }

    if(newArr.length === 0)
        throw `stock not found`
    return newArr[0]
}


module.exports = {
    listShareholders,
    totalShares,
    listStocks,
    getStockById
}

/*
https://stackoverflow.com/questions/35480773/sum-values-of-objects-in-array
https://stackoverflow.com/questions/4215737/convert-array-to-object
*/