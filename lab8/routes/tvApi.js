const express = require('express')
const router = express.Router();
const axios = require("axios");

const tvMazeApiSearchUrl = 'http://api.tvmaze.com/search/shows?q='
const tvMazeApiSearchIdUrl = 'http://api.tvmaze.com/shows/'

async function getApiData(url) {
    let { data } = await axios.get(url);
    return data;
} 

async function getTvShows(showName) {
    // if(!stockName) throw `you must provide a stockname`;
    // if (typeof stockName !== 'string') throw 'stockname must be a string';
    // if (stockName.trim().length === 0)
    //   throw 'stockname cannot be an empty string or just spaces';

    let apiData = await getApiData(tvMazeApiSearchUrl + showName);
    //let newArr = [];

    // for (const [key, value] of Object.entries(apiData)) {
    //     if(value["stock_name"] == stockName) newArr.push(value);
    // }

    // if(newArr.length === 0)
    //     throw `stock does not exist`


    return apiData
}

async function getTvShowsById(id) {
    let apiData = await getApiData(tvMazeApiSearchIdUrl + id);

    return apiData;
} 



router.get('/', async (req, res) => {
    res.render('posts/search', {title: 'Show Finder'})
})

router.post('/searchshows', async (req, res) => {
    const showName = req.body.showSearchTerm;
    const showData = await getTvShows(showName)

    const showDataResults = Object.entries(showData).slice(0,5).map(entry => entry[1])

    res.render('posts/searchresult', {someData: showDataResults, title: 'Shows Found'})
})

router.get('/show/:id', async (req, res) => {
    const showIdData = await getTvShowsById(req.params.id)
    //res.json(showIdData)

    res.render('posts/individualshow', {
        showName: showIdData.name, 
        showImg: showIdData.image.original,
        showLanguage: showIdData.language,
        showGenre: showIdData.genres,
        showRating: showIdData.rating,
        showNetwork: showIdData.network, 
        showSummary: showIdData.summary
    })
})


module.exports = router;


// https://stackoverflow.com/questions/22696886/how-to-iterate-over-array-of-objects-in-handlebars
// https://stackoverflow.com/questions/10377700/limit-results-of-each-in-handlebars-js
// https://stackoverflow.com/questions/39336556/how-can-i-slice-an-object-in-javascript