const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.render('posts/prime', {title:'The Prime Number Checker'})
    } catch(e) {
        res.status(404).json({error: 'Not Found'})
    }
})

module.exports = router;