const axios = require("axios");
const peopleJsonUrl = 
    'https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json'
const workJson = 
    'https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json'

let exportedDataMethods = {
    async getPeopleJsonData() {
        let { data } = await axios.get(peopleJsonUrl);
        return data;
    },

    async getWorkJsonData() {
        let { data } = await axios.get(workJson);
        return data;
    },

    async getPeopleJsonById(id) {
        if(!id) throw `you must provide an id`
        const numId = +id
        if(numId < 0) throw `id value must be a positive integer`
        if(isNaN(numId)) throw `id value must be a positive integer`
        if(typeof numId !== 'number') throw `id value must be a positive integer and not empty`

        let peopleApiData = []
        let { data } = await axios.get(peopleJsonUrl)

        for(const [key,value] of Object.entries(data)) {
            if (value["id"] == numId) peopleApiData.push(value)
        }

        return peopleApiData[0];

    },

    async getWorkJsonById(id) {
        if(!id) throw `you must provide an id`
        const numId = +id
        if(numId < 0) throw `id value must be a positive integer`
        if(isNaN(numId)) throw `id value must be a positive integer`
        if(typeof numId !== 'number') throw `id value must be a positive integer and not empty`

        let workApiData = []
        let { data } = await axios.get(workJson)

        for(const [key,value] of Object.entries(data)) {
            if (value["id"] == numId) workApiData.push(value)
        }

        return workApiData[0];

    }
}

module.exports = exportedDataMethods; 
