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
        let peopleApiData = []
        let { data } = await axios.get(peopleJsonUrl)

        for(const [key,value] of Object.entries(data)) {
            if (value["id"] == id) peopleApiData.push(value)
        }

        return peopleApiData[0];

    },

    async getWorkJsonById(id) {
        let workApiData = []
        let { data } = await axios.get(workJson)

        for(const [key,value] of Object.entries(data)) {
            if (value["id"] == id) workApiData.push(value)
        }

        return workApiData[0];

    }
}

module.exports = exportedDataMethods; 