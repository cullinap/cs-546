const dataFromApi = require('./data/userApi')
const peopleJson = 
    'https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json'


// async function testGetDataFromPeopleJson() {
//     try {
//         let getPeopleJson = await dataFromApi.getApiData(peopleJson)
//         console.log(getPeopleJson);
//     } catch(e) {
//         console.log(e);
//     }
// }

async function testGetDataFromPeopleJsonById() {
    try {
        let getPeopleJsonById = await dataFromApi.getPeopleJsonById(1)
        console.log(getPeopleJsonById);
    } catch(e) {
        console.log(e);
    }
}


//testGetDataFromPeopleJson()
testGetDataFromPeopleJsonById()