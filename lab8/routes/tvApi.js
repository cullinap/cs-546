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

    return apiData
}

async function getTvShowsById(id) {
    let apiData = await getApiData(tvMazeApiSearchIdUrl + id);

    return apiData;
} 

function removeHtml(text) {
    return text.replaceAll(/<.*?>/g, "");
}

// router functions

router.get('/', async (req, res) => {
    try {
        res.render('posts/search', {title: 'Show Finder'})
    } catch(e) {
        res.status(404).json({error: 'Not Found'})
    }
})

router.post('/searchshows', async (req, res) => {
    try {
        const showName = req.body.showSearchTerm;
        const showData = await getTvShows(showName)

        const showDataResults = Object.entries(showData).slice(0,5).map(entry => entry[1])

        res.render('posts/searchresult', {
            someData: showDataResults, 
            showSearchTerm: req.body.showSearchTerm, 
            title: 'Shows Found'
        })
    } catch(e) {
        res.status(404).json({error: 'Not Found'})
    }
})

router.get('/show/:id', async (req, res) => {
    try {
        const showIdData = await getTvShowsById(req.params.id)
        //res.json(showIdData)

        res.render('posts/individualshow', {
            showName: showIdData.name, 
            showImg: showIdData.image.medium,
            showLanguage: showIdData.language,
            showGenre: showIdData.genres,
            showRating: showIdData.rating,
            showNetwork: showIdData.network, 
            showSummary: removeHtml(showIdData.summary)
        })
    } catch(e) {
        res.status(404).render('posts/errorpage', {errorId: req.params.id})
    }
})


module.exports = router;


// https://stackoverflow.com/questions/22696886/how-to-iterate-over-array-of-objects-in-handlebars
// https://stackoverflow.com/questions/10377700/limit-results-of-each-in-handlebars-js
// https://stackoverflow.com/questions/39336556/how-can-i-slice-an-object-in-javascript
// https://stackoverflow.com/questions/43983591/string-regex-replace-in-node-js
// https://stackoverflow.com/questions/11229831/regular-expression-to-remove-html-tags-from-a-string
// https://www.youtube.com/watch?v=e6j5qHTwLkk