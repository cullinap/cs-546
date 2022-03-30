const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.render('posts/prime', {title:'hi'})
    } catch(e) {
        res.status(404).json({error: 'Not Found'})
    }
})

module.exports = router;