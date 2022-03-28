const axios = require("axios");

const tvMazeApiSearchUrl = 'http://api.tvmaze.com/search/shows?q='
const tvMazeApiSearchIdUrl = 'http://api.tvmaze.com/shows/'

async function getApiData(url) {
    let { data } = await axios.get(url);
    return data;
} 

async function main() {
    console.log('testing out this api')
    try {
        let apiData = await getApiData(tvMazeApiSearchUrl + 'simpson');
        
        for (const [key, value] of Object.entries(apiData)) {
            console.log(value.show)
            //newArr.push(value.n);
        }
        
        //console.log(apiData[1].show.name)
    } catch(e) {
        console.log('didnt work')
    }
    console.log('done')
}

main()