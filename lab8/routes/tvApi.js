const express = require('express')
const router = express.Router();
const axios = require("axios");

const tvMazeApiSearchUrl = 'http://api.tvmaze.com/search/shows?q='
const tvMazeApiSearchIdUrl = 'http://api.tvmaze.com/shows/'

async function getApiData(url) {
    let { data } = await axios.get(url);
    return data;
} 

function checkInput(value) {
    if(value.trim().length === 0) 
        return true
    return false
}

async function getTvShows(showName) {

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

function checkNetwork(value) {
    if(!value)
        return 'N/A'
    return value.name
}

function checkShowValues(value) {
    if(!value)
        return 'N/A'
    return value
}

function checkShowImage(img) {
    if(!img)
        return "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
    return img.medium
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
        if(checkInput(req.body.showSearchTerm)){
            res.status(400).render('posts/error', {msg: 'input must contain values and not be empty'})
        }
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
            title: checkShowValues(showIdData.name),
            showName: checkShowValues(showIdData.name), 
            showImg: checkShowImage(showIdData.image),
            showLanguage: checkShowValues(showIdData.language),
            showGenre: checkShowValues(showIdData.genres),
            showRating: checkShowValues(showIdData.rating.average),
            showNetwork: checkNetwork(showIdData.network), 
            showSummary: checkShowValues(removeHtml(showIdData.summary))
        })
    } catch(e) {
        res.status(404).render('posts/errorpage', {msg: "We're sorry, but no results were found for" + ' ' + req.params.id})
    }
})


module.exports = router;


// https://stackoverflow.com/questions/22696886/how-to-iterate-over-array-of-objects-in-handlebars
// https://stackoverflow.com/questions/10377700/limit-results-of-each-in-handlebars-js
// https://stackoverflow.com/questions/39336556/how-can-i-slice-an-object-in-javascript
// https://stackoverflow.com/questions/43983591/string-regex-replace-in-node-js
// https://stackoverflow.com/questions/11229831/regular-expression-to-remove-html-tags-from-a-string
// https://www.youtube.com/watch?v=e6j5qHTwLkk