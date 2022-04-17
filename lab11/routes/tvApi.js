const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/', async (req, res) => {
    try {
        res.sendFile(path.resolve('static/home.html'))
    } catch(e) {
        res.status(404).json({error: 'Not Found'})
    }
})

module.exports = router;